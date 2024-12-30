const mongoos = require('mongoose');

const db = require('../config/db');

const {Schema} = mongoos;

const productSchema = new mongoos.Schema({
    id : {
        type: String,
        lowercase:true,
        required: true,
    },
    ptitle : {
        type: String,
        lowercase:true,
        required: true,
    },
    pprice: {
        type: String,
        lowercase:true,
        required: true,
    },
    brand :{
        type: String,
        lowercase:true,
        required: true,
    },
    category : {
        type: String,
        lowercase:true,
        required: true,
    },
    tag :{
        type: String,
        lowercase:true,
        required: true,
    },
    quantity : {
        type: String,
        lowercase:true,
        required: true,
    },
    pdescription: {
        type: String,
        lowercase:true,
        required: true,
    }
});

const productmodel = db.model('prodcuts',productSchema);

module.exports = productmodel;