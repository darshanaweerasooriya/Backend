const router = require('express').Router();
const categorydetail = require("../controller/category.controller");

router.post('/category',categorydetail.catdetails);

module.exports = router;