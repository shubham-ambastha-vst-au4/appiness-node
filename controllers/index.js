// Importing all controllers in single file
import { getCategory, createCategory, deleteCategory } from './category';
import { getProduct, createProduct } from './product';
export default ({
    getCategory,
    createCategory,
    deleteCategory,
    getProduct,
    createProduct
})