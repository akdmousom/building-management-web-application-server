const { Schema, default: mongoose } = require("mongoose");

const couponSchema = new Schema({ 
    couponCode : String,
    discount: Number,
    description: String
});
const couponSchemaModel = mongoose.model('coupon', couponSchema);

module.exports = couponSchemaModel