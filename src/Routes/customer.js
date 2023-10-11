const express = require('express');
const router = express.Router();
const { newcustomer ,getallcustomers,submitdebts,deletecustomer,searchcustomer} = require('../Controllers/customer');


router.post('/addcustomer', newcustomer);
router.post('/searchcustomer', searchcustomer);

router.post('/submitdebts',submitdebts);
router.post('/deletecustomer',deletecustomer);
router.get('/getallcustomers',getallcustomers);

module.exports = router;