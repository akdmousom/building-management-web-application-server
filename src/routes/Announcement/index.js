const express = require('express');
const postAnnouncement = require('../../api/announcement/postAnnouncement');
const verifyToken = require('../../middlewares/verifyToken');
const onlyAdminAccess = require('../../middlewares/onlyAdminAccess');
const router = express.Router();


router.post('/api/v1/post-announcement',onlyAdminAccess, postAnnouncement )
router.get('/api/v1/announcement', )

module.exports = router