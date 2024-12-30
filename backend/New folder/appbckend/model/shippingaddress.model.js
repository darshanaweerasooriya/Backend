const mongoose = require('mongoose');

const db = require('../config/db');

const {Scheme} = mongoose;

const shipingSchema = new mongoose.Schema({
    country : {
        type: String,
        lowercase:true,
        required: true,
    },
    firstname : {
        type: String,
        lowercase:true,
        required: true,
        
    },
    lastname : {
        type: String,
        lowercase:true,
        required: true,
        
    },
    address : {
        type: String,
        lowercase:true,
        required: true,
    },
    apartment : {
        type: String,
        lowercase:true,
        required: true,
    },
    city : {
        type: String,
        lowercase:true,
        required: true,
    },
    state : {
        type: String,
        lowercase:true,
        required: true,
    },
    zipcode : {
        type: Number,
        required: true,
    }
});

const shippingmodel = db.model('address', shipingSchema)

module.exports = shippingmodel