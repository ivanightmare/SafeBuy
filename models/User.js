const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type = String,
        required = true
    },
    email: {
        type = String,
        required: true
    },
    password: {
        type = String,
        required: true

    },
    date: {
        type: String,
        require: true

    },
    role: {
        type: String,
        default: 'user',
        enum: ['user','employee','manager','boss']

    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

