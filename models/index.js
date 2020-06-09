// Importing dependencies
import mongoose from 'mongoose'
// Importing controllers
import Category from './Category'
import Products from './Products'

// Defining database URL or starting default as local DB
let dbURL = process.env.mongoURL || 'mongodb://127.0.0.1:27017/appiness';

// Creating connect function to pass in server file
function connect() {
    return mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}

export {
    Category,
    Products,
    connect
}