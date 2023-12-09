const { Schema, model } = require('mongoose')
const mongoose = require('mongoose');

const payrentSchema = new Schema({
   userEmail: {
    type: String,
    required: true
   },
    floorNo: {
        type: Number,
        required: true,
    },

    blockName: {
        type: String,
        required: true,
    },
    apartmentNo: {
        type: Number,
        required: true,
    },
    rent: {
        type: Number,
        required: true,
    },
    month:{
        type: String,
        required: true
    }


    
})

const payrendData = mongoose.model('payrent', payrentSchema);

module.exports = payrendData

