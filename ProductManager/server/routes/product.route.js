//* Routes need to know about controller
const ProductController = require('../controllers/product.controller');

//! Routes
//* This is where all the routes go 
module.exports = (app)=> {
    //todo  Stacking routes and function calls  
    app.get("/api/products",ProductController.showAllProducts);
    app.get("/api/showoneProduct/:_id",ProductController.showOneProduct);
    app.post("/api/createProduct",ProductController.createProduct);
    app.put("/api/updateProduct/:id",ProductController.updateOneProduct)
    app.delete("/api/deleteProduct/:id",ProductController.deleteProduct);
}