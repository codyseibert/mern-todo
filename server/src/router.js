const express = require('express');

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

module.exports = router;