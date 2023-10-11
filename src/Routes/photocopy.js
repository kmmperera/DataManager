const express = require('express');
const router = express.Router();
const { addphotocopy,searchphotocopy} = require('../Controllers/photocopy');


router.post('/addphotocopy', addphotocopy);
router.post('/searchphotocopy', searchphotocopy);


module.exports = router;