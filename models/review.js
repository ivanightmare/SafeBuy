const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    date: {
        type: Date,
        default: Date.now
    },
    user: String,
});

const Review = mongoose.model('review', reviewSchema);
module.exports = Review;