const ProductController =require("../controllers/product.controller");

module.exports = app => {
    //Get All
    app.get("/api/products", ProductController.findAllProducts),
    // //Get One
    app.get("/api/products/:_id", ProductController.findOneProduct);
    // //Create One
    app.post("/api/products/new", ProductController.createProducts);
    // //Delete One
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
    // //Update One
    app.put("/api/products/update/:_id", ProductController.updateProduct);
}