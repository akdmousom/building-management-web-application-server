const express = require('express');
const User = require('../../models/userRegister/userRegister');
const registerUser = require('../../api/registerUser/controllers/registerUser');
const userRole = require('../../api/users/controllers/userRole');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../Authentication/adminAuthentication');
const allUser = require('../../api/users/controllers/allUser');
const onlyAdminAccess = require('../../middlewares/onlyAdminAccess');
const memberRemove = require('../../api/users/controllers/memberRemove');
const router = express.Router();

router.post('/api/v1/register',registerUser)

router.get('/api/v1/users', verifyAdmin)

router.get('/api/v1/all-users', onlyAdminAccess,  allUser)

router.put('/api/v1/remove-member', memberRemove  )

module.exports = router