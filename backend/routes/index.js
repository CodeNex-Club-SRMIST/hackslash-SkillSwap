const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('SkillSwap API'));

module.exports = router;