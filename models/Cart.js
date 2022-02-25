const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    cartID: {
        type: String,
        required: true
    },
    cartDate: {
        type: String,
        required: true
    },
    cartStatus: {
        type: String,
        required: true
    },
    cartTotal: {
        type: Number,
        required: true
    },
    cartItems: [{
        productID: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        },
        productQuantity: {
            type: Number,
            required: true
        }
    }],
    cartCustomer: {
        type: String,
        required: true
    },
    cartEmployee: {
        type: String,
        required: true
    }
});

const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;

module.exports.getCart = (callback, limit) => {
    Cart.find(callback).limit(limit);
}

module.exports.getCartById = (id, callback) => {
    Cart.findById(id, callback);
}

module.exports.addCart = (cart, callback) => {
    Cart.create(cart, callback);
}

module.exports.updateCart = (id, cart, options, callback) => {
    var query = {_id: id};
    var update = {
        cartID: cart.cartID,
        cartDate: cart.cartDate,
        cartStatus: cart.cartStatus,
        cartTotal: cart.cartTotal,
        cartItems: cart.cartItems,
        cartCustomer: cart.cartCustomer,
        cartEmployee: cart.cartEmployee
    };
    Cart.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteCart = (id, callback) => {
    var query = {_id: id};
    Cart.remove(query, callback);
}

module.exports.getCartByCustomer = (customer, callback) => {
    Cart.find({cartCustomer: customer}, callback);
}

module.exports.getCartByEmployee = (employee, callback) => {
    Cart.find({cartEmployee: employee}, callback);
}

module.exports.getCartByDate = (date, callback) => {
    Cart.find({cartDate: date}, callback);
}

module.exports.getCartByStatus = (status, callback) => {
    Cart.find({cartStatus: status}, callback);
}

module.exports.getCartByTotal = (total, callback) => {
    Cart.find({cartTotal: total}, callback);
}

module.exports.getCartByItems = (items, callback) => {
    Cart.find({cartItems: items}, callback);
}

module.exports.getCartByID = (id, callback) => {
    Cart.find({cartID: id}, callback);
}

module.exports.getCartByPrice = (price, callback) => {
    Cart.find({cartPrice: price}, callback);
}

module.exports.getCartByQuantity = (quantity, callback) => {
    Cart.find({cartQuantity: quantity}, callback);
}

module.exports.getCartByName = (name, callback) => {
    Cart.find({cartName: name}, callback);
}

