const express = require('express');
const User = require('../../models/userRegister/userRegister');
const registerUser = require('../../api/registerUser/controllers/registerUser');
const userRole = require('../../api/users/controllers/userRole');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../Authentication/adminAuthentication');
const router = express.Router();

router.post('/api/v1/register',registerUser)

router.get('/api/v1/users', verifyAdmin, userRole)

module.exports = router