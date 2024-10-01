const express = require('express');
const router = express.Router();

const { verifyLawyer } = require('../controllers/lawyerController');

router.post('/verify_lawyer', verifyLawyer);

module.exports = router;