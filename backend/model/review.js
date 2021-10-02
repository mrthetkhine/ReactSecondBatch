//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movies"
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },

});
module.exports = mongoose.model('Reviews', ReviewSchema);