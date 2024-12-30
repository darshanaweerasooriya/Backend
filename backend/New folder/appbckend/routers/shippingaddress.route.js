const router = require('express').Router();
const shippingaddress = require("../controller/shippingaddress")

router.post('/shippingaddress', shippingaddress.shippingdetails);

router.get('/getshipping',shippingaddress.getshipping);

module.exports = router;