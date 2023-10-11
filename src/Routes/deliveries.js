const express = require('express');
const router = express.Router();
const { newdelivery,getongoingdelivery,updategetongoingdelivery,getcompleteddeliveries} = require('../Controllers/deliveries');


router.post('/newdelivery', newdelivery);
router.post('/updategetongoingdelivery', updategetongoingdelivery);

router.get('/getongoingdelivery', getongoingdelivery);
router.get('/getcompleteddeliveries', getcompleteddeliveries);

module.exports = router;