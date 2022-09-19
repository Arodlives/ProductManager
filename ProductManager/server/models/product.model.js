const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    //define what properties to  be  in  this  schema
    //validations
    title: {
        type: String,
        required: [true,"Title  is required"],
        minlength:[4,"Title is required to be more  than  4 characters"],
    },
    price: { 
        type: Number 
    },
    description: { 
        type: String 
    },
}, { timestamps: true });
const Product= mongoose.model('Product', ProductSchema);
module.exports = Product;
