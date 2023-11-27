const apartmentData = require("../../../models/apartments/apartments")


const getApartmentsData = async(req,res)=>{
    
    const page = Number(req.query.page)
    const limit = Number(req.query.limit)
    const skip = (page-1)*limit;


    const cursor = await apartmentData.find().skip(skip).limit(limit)
    const total = await apartmentData.countDocuments()
    res.send({cursor, total})

}

module.exports = getApartmentsData