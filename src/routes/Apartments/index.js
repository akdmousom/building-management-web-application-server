const express = require('express');
const getApartmentsData = require('../../api/apartments/controllers/getApartmentsData');
const router = express.Router();
const Agreement = require('../../models/apartments/agreement');
const verifyToken = require('../../middlewares/verifyToken');
const agreementController = require('../../api/apartments/controllers/agreement');

router.get('/api/v1/apartments', getApartmentsData);

router.post('/api/v1/agreement', verifyToken, agreementController )

module.exports = router;