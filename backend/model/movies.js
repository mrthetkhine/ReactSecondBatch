//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number
    }
});
module.exports = mongoose.model('Movies', MovieSchema);