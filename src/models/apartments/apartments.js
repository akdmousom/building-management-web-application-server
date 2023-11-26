const { Schema, model } = require('mongoose')
const mongoose = require('mongoose');

const apartmentSchema = new Schema({
    image : {
        type: String,
        required: true,
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


    
})

const apartmentData = mongoose.model('apartments', apartmentSchema);

module.exports = apartmentData

