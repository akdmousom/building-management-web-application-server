const express = require('express');
const User = require('../../models/userRegister/userRegister');
const registerUser = require('../../api/registerUser/controllers/registerUser');
const router = express.Router();

router.post('/api/v1/register',registerUser)

module.exports = router