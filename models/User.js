const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type = String,
        required = true
    },
    username:{
        type: String,
        required: true
    },
    email: {
        type = String,
        required: true
    },
    password: {
        type = String,
        required: true

    },
    phone: {
        type = String,
        required: true
    },
    address: {
        type = String,
        required: true
    },
    city: {
        type = String,
        required: true
    },
    state: {
        type = String,
        required: true
    },
    zip: {
        type = String,
        required: true
    },
    photoID: {
        type = String,
        required: true
    },
    date: {
        type: String,
        require: true

    },
    profile: {
        type: Image,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user','employee','manager','boss']

    },
    status: {
        type: String,
        default: 'active',
        enum: ['active','inactive']
    },
    createdOn: {
        type = Date,
        default: Date.now
    },

});

const User = mongoose.model('User', UserSchema);
module.exports = User;

