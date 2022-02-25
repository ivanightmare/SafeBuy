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
    productLocation: {
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

const Products = mongoose.model('products', ProductSchema);
module.exports = Products;

moudle.exports.getProduct = (callback, limit)=>{
    Products.find(callback).limit(limit);
}

module.exports.getProductsById = (id,callback) => {
    products.findById(id, callback);
}

module.exports.addProduct = (product, callback) => {
    Products.create(product, callback);
}

module.exports.updateProduct = (id, product, options, callback) => {
    var query = {_id: id};
    var update = {
        productName: product.productName,
        productType: product.productType,
        productLocation: product.productLocation,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productImage: product.productImage,
        productQuantity: product.productQuantity,
        productStatus: product.productStatus
    }
    Products.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProduct = (id, callback) => {
    var query = {_id: id};
    Products.remove(query, callback);
}

module.exports.getProductByName = (name, callback) => {
    var query = {productName: name};
    Products.findOne(query, callback);
}

module.exports.getProductByType = (type, callback) => {
    var query = {productType: type};
    Products.findOne(query, callback);
}

module.exports.getProductByLocation = (location, callback) => {
    var query = {productLocation: location};
    Products.findOne(query, callback);
}

module.exports.getProductByDescription = (description, callback) => {
    var query = {productDescription: description};
    Products.findOne(query, callback);
}

module.exports.getProductByPrice = (price, callback) => {
    var query = {productPrice: price};
    Products.findOne(query, callback);
}

module.exports.getProductByImage = (image, callback) => {
    var query = {productImage: image};
    Products.findOne(query, callback);
}

module.exports.getProductByQuantity = (quantity, callback) => {
    var query = {productQuantity: quantity};
    Products.findOne(query, callback);
}

module.exports.getProductByStatus = (status, callback) => {
    var query = {productStatus: status};
    Products.findOne(query, callback);
}

module.exports.getProductByCreatedOn = (createdOn, callback) => {
    var query = {createdOn: createdOn};
    Products.findOne(query, callback);
}


