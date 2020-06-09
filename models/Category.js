// Importing dependencies
import mongoose from 'mongoose'

//Creating schema for category
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Category = mongoose.model('Category', categorySchema);
export default Category;