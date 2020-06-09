// Importing models
import Products from '../models/Products'
import Category from '../models/Category'

// To get all Products
export const getProduct = async (req, res) => {
    try {
        let products = await Products.find()

        return res.status(200).json({
            message: products,
            status: "success"
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
            status: "failure"
        })
    }
}

// To create Products with given name
export const createProduct = async (req, res) => {
    let { name, categoryName } = req.body;
    try {
        let category = await Category.findOne({ name: categoryName })
        let product = await Products.create({ name, category: category._id })
        category.products.push(product._id);
        await category.save();
        return res.status(201).json({
            message: product,
            status: "success"
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
            status: "failure"
        })
    }
}