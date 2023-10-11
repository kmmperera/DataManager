const express = require('express');
const router = express.Router();
const { newmoneytransfer,updatecustomer} = require('../Controllers/moneytransfer');


router.post('/newmoneytransfer', newmoneytransfer,updatecustomer);


module.exports = router;