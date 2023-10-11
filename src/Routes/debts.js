const express = require('express');
const router = express.Router();
const {newdebt } = require('../Controllers/debts');


router.post('/newdebt', newdebt);


module.exports = router;