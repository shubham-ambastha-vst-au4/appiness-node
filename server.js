// Importing dependencies
import express from 'express'
const app = express();
import routes from './routes/index' // Importing routes controller
import { connect } from './models/index' // Importing Database connection function

// <----Middlewares---->
// For CORS policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods: PUT, GET, POST");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});
// For Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// For API routes
app.use('/category', routes.category);
app.use('/product', routes.product);

// Start the app on pre defined port number and environment
const env = process.env.NODE_ENV || 'default';
const PORT = process.env.PORT || 9090;

// Connecting to database and the starting server if successfull
connect()
    .then(function () {
        app.listen(PORT, function () {
            console.log("Application has started in environment " + env + " and running on port: ", PORT);
        }).on('error', function (error) {
            console.log("Unable to start app. Error >>>>", error);
        });
    }).catch(function (error) { // Catching error here
        console.log("Failed to setup connecton with database.", error);
    });