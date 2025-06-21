const express = require('express');
const router = express.Router();

router.use('/users', require('./user'));

router.get('/', (req, res) => res.send('API Home'));

module.exports = router;