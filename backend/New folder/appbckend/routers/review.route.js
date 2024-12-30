const router = require('express').Router();
const reviewcus = require("../controller/review.controller")

router.post('/review', reviewcus.reviewdetails);

module.exports = router;