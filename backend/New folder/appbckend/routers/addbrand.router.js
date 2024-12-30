const router = require('express').Router();
const brandname = require("../controller/addbrand.controller")

router.post('/addbrnad',brandname.branddetails);

module.exports = router;