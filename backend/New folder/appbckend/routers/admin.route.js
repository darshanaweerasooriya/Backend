const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/adminlogin.controller');

router.post('/login',authcontroller.login);

module.exports = router;