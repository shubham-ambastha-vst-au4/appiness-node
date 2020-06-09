// Importing models
import Category from '../models/Category'
import Products from '../models/Products'

// To get all Categories
export const getCategory = async (req, res) => {
    try {
        let category = await Category.find()

        return res.status(200).json({
            message: category,
            status: "success"
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
            status: "failure"
        })
    }
}

// To create Category with given name
export const createCategory = async (req, res) => {
    let { name } = req.body;
    try {
        let category = await Category.create({ name })
        return res.status(201).json({
            message: category,
            status: "success"
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
            status: "failure"
        })
    }
}

// To delete Category and its products with given category name
export const deleteCategory = async (req, res) => {
    let { name } = req.body;
    try {
        let category = await Category.findOne({ name })
        await Products.deleteMany({category: category._id})
        await category.remove()
        return res.status(200).json({
            message: category,
            status: "success"
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
            status: "failure"
        })
    }
}