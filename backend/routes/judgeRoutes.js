const express = require('express');
const router = express.Router();

const { verifyJudge } = require('../controllers/judgeController');

router.post('/verify_judge', verifyJudge);

module.exports = router;