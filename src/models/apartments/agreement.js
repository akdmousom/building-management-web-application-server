const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const agrementSchema = mongoose.Schema({
    userName : {
        type : String,
        required: true
    },
    userEmail : {
        type : String,
        required: true
    },
    floorNo : {
        type : Number,
        required: true
    },
    blockName : {
        type : String,
        required: true
    },
    apartmentNo : {
        type : Number,
        required: true
    },
    rent : {
        type : Number,
        required: true
    },
    status: {
        type: String,
        enum : ['Pending', 'resolve'],
        default : 'Pending'
    }
})

const Agreement = new mongoose.model('Agreement',agrementSchema )

module.exports = Agreement;