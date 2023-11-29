const express = require('express');
const postAnnouncement = require('../../api/announcement/postAnnouncement');
// const verifyToken = require('../../middlewares/verifyToken');
const onlyAdminAccess = require('../../middlewares/onlyAdminAccess');
const getAnnouncement = require('../../api/announcement/controller/getAnnouncement')
const router = express.Router();
const announcementModel = require('../../models/announcements/announcements');


router.get('/api/v1/get-announcement', getAnnouncement)
router.post('/api/v1/post-announcement',onlyAdminAccess, postAnnouncement );

module.exports = router