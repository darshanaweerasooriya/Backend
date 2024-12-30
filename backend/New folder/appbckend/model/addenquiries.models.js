const mongoos = require('mongoose');

const db = require('../config/db');
const { default: mongoose } = require('mongoose');

const enquiriesSchema = new mongoos.Schema({
    name : {
        type: String,
        lowercase:true,
        required: true,
    },
    mobilenum : {
        type: String,
        lowercase:true,
        required: true,
    },
    email: {
        type: String,
        lowercase:true,
        required: true,
    },
    comment :{
        type: String,
        lowercase:true,
        required: true,
    },
    status : {
        type: String,
        lowercase:true,
        required: true,
    },
    
});

const enquiriesModel = db.model('enquiries',enquiriesSchema);
module.exports = enquiriesModel;