const express = require('express');
const router = express.Router();
const {getevents } = require('../Controllers/events');


router.post('/getevents', getevents);


module.exports = router;