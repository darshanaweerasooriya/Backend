const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://darshanaweerasooriya:meekiri213@cluster0.q7lda.mongodb.net/Techhive?retryWrites=true&w=majority&appName=Cluster0').on('open',()=>{
    console.log("MongoDb connected Successfully");
}).on('error',()=>{
    console.log("Data base connection error");
});


module.exports = connection;