const express = require('express');
const router = express.Router();

const { verifyUser, getUserCases, getUserHearing, addCase } = require('../controllers/userController');

router.post('/verify_user', verifyUser);
router.post('/add_case', addCase);
router.post('/get_user_cases', getUserCases);
router.post('/get_user_hearings', getUserHearing);

module.exports = router;