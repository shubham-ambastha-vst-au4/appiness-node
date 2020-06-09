// Importing dependencies
import mongoose from 'mongoose'

//Creating schema for product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Products = mongoose.model('Product', productSchema);
export default Products;