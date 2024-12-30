const router = require('express').Router();
const enquiriesdetails = require("../controller/addenquiries.controller");

router.post('/addenquiries', enquiriesdetails.sendenquiries);

router.get('/fetchartitakure',enquiriesdetails.getalldetails)

module.exports = router;