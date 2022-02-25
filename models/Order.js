const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderNumber: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    orderTotal: {
        type: Number,
        required: true
    },
    orderItems: [{
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
    orderCustomer: {
        type: String,
        required: true
    },
    orderEmployee: {
        type: String,
        required: true
    }
});

const Orders = mongoose.model('orders', OrderSchema);
module.exports = Orders;

module.exports.getOrder = (callback, limit) => {
    Orders.find(callback).limit(limit);
}

module.exports.getOrderById = (id, callback) => {
    Orders.findById(id, callback);
}

module.exports.addOrder = (order, callback) => {
    Orders.create(order, callback);
}

module.exports.updateOrder = (id, order, options, callback) => {
    var query = {_id: id};
    var update = {
        orderNumber: order.orderNumber,
        orderDate: order.orderDate,
        orderStatus: order.orderStatus,
        orderTotal: order.orderTotal,
        orderItems: order.orderItems,
        orderCustomer: order.orderCustomer,
        orderEmployee: order.orderEmployee
    };
    Orders.findOneAndUpdate(query, update, options, callback);
}   

module.exports.deleteOrder = (id, callback) => {
    var query = {_id: id};
    Orders.remove(query, callback);
}

module.exports.getOrderByCustomer = (customer, callback) => {
    Orders.find({orderCustomer: customer}, callback);
}

module.exports.getOrderByEmployee = (employee, callback) => {
    Orders.find({orderEmployee: employee}, callback);
}

module.exports.getOrderByStatus = (status, callback) => {
    Orders.find({orderStatus: status}, callback);
}

module.exports.getOrderByDate = (date, callback) => {
    Orders.find({orderDate: date}, callback);
}

module.exports.getOrderByNumber = (number, callback) => {
    Orders.find({orderNumber: number}, callback);
}

module.exports.getOrderByTotal = (total, callback) => {
    Orders.find({orderTotal: total}, callback);
}

module.exports.getOrderByItem = (item, callback) => {
    Orders.find({orderItems: item}, callback);
}


