const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must be at least chars"]
    },
    price: {
        type: Number,
        required: [true, "It costs how much?"],
        min: [1.99, "Has to be more than $2 Dollars"]
    },
    description: {
        type: String,
        required: [true, "You aren't gonna tell me about it?"],
        minlength: [10, "Description needs to be at least 10 characters"]
    }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;