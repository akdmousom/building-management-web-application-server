const apartmentData = require("../../../models/apartments/apartments")


const getApartmentsData = async(req,res)=>{

    const cursor =await apartmentData.find()
    
    res.send(cursor)

}

module.exports = getApartmentsData