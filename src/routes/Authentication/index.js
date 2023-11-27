const express = require('express');
const router = express.Router();
const tokenController = require('../../api/authentication/controllers/jwtControllers');

router.post('/api/v1/jwt', tokenController)

module.exports = router
