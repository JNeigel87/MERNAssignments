const Product = require("../models/product.model");

module.exports.findAllProducts = (req,res) =>  {
    Product.find()
            .then(allProds => res.json({products: allProds}))
            .catch(err => res.json({message: "You broke it good this time!", error: err}))
}

module.exports.createProducts = (req,res) =>  {
    Product.create(req.body)
            .then(newProd => res.json({product: newProd}))
            .catch(err => res.json({message: "You broke it good this time!", error: err}))
}

module.exports.findOneProduct = (req,res) =>  {
    Product.findOne({_id: req.params._id})
            .then(oneProd => res.json({products: oneProd}))
            .catch(err => res.json({message: "You broke it good this time!", error: err}))
}

module.exports.deleteProduct = (req,res) =>  {
    Product.remove({_id: req.params._id})
            .then(res.json({message: "This product malfunctioned and went to the trash!"}))
            .catch(err => res.json({message: "You broke it good this time!", error: err}))
}

module.exports.updateProduct = (req,res) =>  {
    Product.update({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        }
    }, {runValidators: true})
            .then(oneProd => res.json({products: oneProd}))
            .catch(err => res.json({message: "You broke it good this time!", error: err}))
}

