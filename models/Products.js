import mongoose from 'mongoose'

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