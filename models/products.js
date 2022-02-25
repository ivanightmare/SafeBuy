const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productType:{
        type: String,
        required: true
    },
    productDescription:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productImage:{
        type: String,
        required: true
    },
    productQuantity:{
        type: Number,
        required: true
    },
    productStatus:{
        type: String,
        required: true
    },
    cretedOn:{
        type: Date, 
        default: Date.now

    },
});

const products = mongoose.model('products', ProductSchema);
module.exports = products;