import mongoose from 'mongoose'
import Category from './Category'
import Products from './Products'

let dbURL = process.env.mongoURL || 'mongodb://127.0.0.1:27017/appiness';

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