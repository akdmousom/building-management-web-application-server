const getCoupon = require('../../../models/coupon/coupon')
const getCoupondata = async(req,res)=>{
    
    await getCoupon.find().then(result=>{
        res.status(200).send(result)

    }).catch(err=>{
        res.status(401).send({message: 'Something wrong'})
    })
    
}

module.exports = getCoupondata