const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.route');
const postingrouting = require('./routers/posting.route');
const shippingroute = require('./routers/shippingaddress.route');
const review = require('./routers/review.route');
const authroute = require('./routers/admin.route');
const pdoduct = require('./routers/addproduct.rote');
const addbrand = require('./routers/addbrand.router');
const cat = require('./routers/category.router');
const enquiries = require('./routers/addenquiries.router')
// const predictionroute = require('./routers/predict.rout')

const app = express();

app.use(body_parser.json());

app.use('/',userRouter);

app.use('/',shippingroute);

app.use('/',review);

app.use('/api/auth',authroute);

app.use('/',pdoduct);

app.use('/',addbrand);

app.use('/',cat)


app.use('/',postingrouting);

app.use('/',enquiries)

// app.use('/',predictionroute);

module.exports = app;