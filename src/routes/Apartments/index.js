const express = require('express');
const getApartmentsData = require('../../api/apartments/controllers/getApartmentsData');
const router = express.Router();

router.get('/api/v1/apartments', getApartmentsData);

module.exports = router;