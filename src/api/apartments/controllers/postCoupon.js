const couponSchemaModel = require('../../../models/coupon/coupon')
const rentPay = async(req,res)=>{
    const data = req.body;
    const coupon = new couponSchemaModel(data)
    await coupon.save().then(result=>{
        res.status(200).send({message: 'success'})

    }).catch(err=>{
        res.status(401).send({message: 'Something wrong'})
    })
    
}

module.exports = rentPay