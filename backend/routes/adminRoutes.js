const express = require('express');
const router = express.Router();

const { verifyAdmin } = require('../controllers/adminController');

router.post('/verify_admin', verifyAdmin);

module.exports = router;