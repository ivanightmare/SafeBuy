const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    firstName: {
        type = String,
        required = true
    },
    lastName: {
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

module.exports.getUser = (callback, limit) => {
    User.find(callback).limit(limit);
}

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.updateUser = (id, user, options, callback) => {
    var query = {_id: id};
    var update = {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        zip: user.zip,
        photoID: user.photoID,
        date: user.date,
        profile: user.profile,
        role: user.role,
        status: user.status
    }
    User.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeUser = (id, callback) => {
    var query = {_id: id};
    User.remove(query, callback);
}

module.exports.addUser = (user, callback) => {
    User.create(user, callback);
}

module.exports.getUserByEmail = (email, callback) => {
    const query = {email: email};
    User.findOne(query, callback);
}

module.exports.getUserByPhone = (phone, callback) => {
    const query = {phone: phone};
    User.findOne(query, callback);
}

module.exports.getUserByAddress = (address, callback) => {
    const query = {address: address};
    User.findOne(query, callback);
}

module.exports.getUserByCity = (city, callback) => {
    const query = {city: city};
    User.findOne(query, callback);
}

module.exports.getUserByState = (state, callback) => {
    const query = {state: state};
    User.findOne(query, callback);
}

module.exports.getUserByZip = (zip, callback) => {
    const query = {zip: zip};
    User.findOne(query, callback);
}

module.exports.getUserByPhotoID = (photoID, callback) => {
    const query = {photoID: photoID};
    User.findOne(query, callback);
}

module.exports.getUserByDate = (date, callback) => {
    const query = {date: date};
    User.findOne(query, callback);
}

module.exports.getUserByRole = (role, callback) => {
    const query = {role: role};
    User.findOne(query, callback);
}

module.exports.getUserByStatus = (status, callback) => {
    const query = {status: status};
    User.findOne(query, callback);
}

module.exports.getUserByCreatedOn = (createdOn, callback) => {
    const query = {createdOn: createdOn};
    User.findOne(query, callback);
}




