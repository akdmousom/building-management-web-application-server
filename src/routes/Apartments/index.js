const express = require('express');
const getApartmentsData = require('../../api/apartments/controllers/getApartmentsData');
const router = express.Router();
const Agreement = require('../../models/apartments/agreement');
const verifyToken = require('../../middlewares/verifyToken');
const agreementController = require('../../api/apartments/controllers/agreement');
const getAgreement = require('../../api/apartments/controllers/getAgreement');
const onlyAdminAccess = require('../../middlewares/onlyAdminAccess');
const updateAgreement = require('../../api/apartments/controllers/updateAgreement');
const agreementAccept = require('../../api/apartments/controllers/agreementAccept');
const payrent = require('../../api/apartments/controllers/payRent')
const getPayRent = require('../../api/apartments/controllers/getPayRent')
const postCoupon = require('../../api/apartments/controllers/postCoupon')
const getCoupondata = require('../../api/apartments/controllers/getCoupon')


router.get('/api/v1/apartments', getApartmentsData);
router.post('/api/v1/agreement', verifyToken, agreementController )
router.get('/api/v1/get-agreement',verifyToken, onlyAdminAccess, getAgreement )
router.put('/api/v1/update-agreement/:id',verifyToken,updateAgreement)
router.get('/api/v1/agreement-accept', agreementAccept)
router.post('/api/v1/pay-rent', verifyToken, payrent)
router.get('/api/v1/get-pay-rent', verifyToken, getPayRent)
router.post('/api/v1/coupon',  postCoupon)
router.get('/api/v1/get-coupon',  getCoupondata)


module.exports = router;