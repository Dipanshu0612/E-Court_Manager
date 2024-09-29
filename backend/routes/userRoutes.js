const express = require('express');
const router = express.Router();

const { verifyUser } = require('../controllers/userController');
const { model } = require('mongoose');

router.post('/verify_user', verifyUser);

module.exports = router;