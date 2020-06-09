# Node-APIs

## APIs for

- [Getting all Categories information from database](controllers/category.js#L4)
- [Creating Category](controllers/category.js#L21)
- **[Deleting specific Category](controllers/category.js#L38) (`API for assignment`)**
- [Getting all Products](controllers/product.js#L4)
- [Creating Product](controllers/product.js#L21)

## Routes for APIs

- Getting Categories `GET` `http://localhost:9090/category/`
- Creating Category `POST` `http://localhost:9090/category/create`
- **Deleting Category `DELETE` `http://localhost:9090/category/delete`**
- Getting Products `GET` `http://localhost:9090/product/`
- Creating Products `POST` `http://localhost:9090/product/create`

## Setup and Configuration. 

### Pre-requisites

* node

### Installation

* Install dependencies using npm

    - ```npm install```

### Dependencies Used

* Express Js (^4.17.1)
* Mongoose (^5.9.18)
* @babel/core (^7.10.2)
* @babel/node (^7.10.1)
* @babel/preset-env (^7.10.2)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in the development mode.<br />
Open [http://localhost:9090](http://localhost:9090) to view it in the browser.