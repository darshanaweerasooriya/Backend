const mongoose = require('mongoose');

const db = require('../config/db');

const {Scheme} = mongoose;

const postingSchema = new mongoose.Schema({
    title : {
        type: String,
        lowercase:true,
        required: true,
    },
    cat : {
        type: String,
        lowercase:true,
        required: true,
        
    },
    description : {
        type: String,
        lowercase:true,
        required: true,
        
    },
   
});

const postingmodel = db.model('blog', postingSchema)

module.exports = postingmodel