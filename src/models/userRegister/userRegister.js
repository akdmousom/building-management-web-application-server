const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userRegisterSchema = new Schema({
    userEmail : {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true
    },
    userRole : {
        type: String,
        enum: ['user', 'member', 'admin'],
        default: 'user',
        
    },
})

const User = mongoose.model('User', userRegisterSchema)

module.exports = User;