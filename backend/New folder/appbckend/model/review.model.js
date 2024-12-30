const mongoose = require('mongoose');


const db = require('../config/db');

const {Schema} = mongoose;

const reviewSchema = new mongoose.Schema({
    comment : {
        type: String,
        lowercase:true,
        required: true,
    }
});

const reviewmodel = db.model('review', reviewSchema)

module.exports = reviewmodel