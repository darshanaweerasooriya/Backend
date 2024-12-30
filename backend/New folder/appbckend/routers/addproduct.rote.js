const router = require('express').Router();
const prodcutdetails = require("../controller/addproduct.controller")

router.post('/addproduct', prodcutdetails.prodcutdetail);

router.get('/getproducts', prodcutdetails.getAllproducts);

router.put('/updateproduct/:id',prodcutdetails.updateproduct);

router.delete('/deleteproduct/:id',prodcutdetails.deleteproduct)

module.exports = router;