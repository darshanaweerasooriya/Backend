const router = require('express').Router();
const posting = require("../controller/posting.controller");

router.post('/posting', posting.postposting);

router.get('/allpost',posting.getAllpost)

module.exports = router;