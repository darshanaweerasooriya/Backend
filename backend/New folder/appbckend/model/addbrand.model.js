const mongoos = require('mongoose');

const db = require('../config/db');

const {Schema} = mongoos;

const brandScheema = new mongoos.Schema({
    brand : {
        type: String,
        lowercase:true,
        required: true,
    }
    
});

const brandmodel = db.model('brand', brandScheema);

module.exports = brandmodel;