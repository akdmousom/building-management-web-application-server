const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    announcement:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

// const announcementModel = new mongoose.model('announcement', announcementSchema);

// module.exports = announcementModel;
const announcementModel = mongoose.model('announcement', announcementSchema);

module.exports = announcementModel