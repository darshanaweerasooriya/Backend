const mongoos = require('mongoose');

const db = require('../config/db');

const {Schema} = mongoos;

const catScheema = new mongoos.Schema({
    category : {
        type: String,
        lowercase:true,
        required: true,
    }
    
});

const catdmodel = db.model('category', catScheema);

module.exports = catdmodel;