const rentData = require('../../../models/apartments/payrent')
const rentPay = async(req,res)=>{
    const data = req.body;
    const rent = new rentData(data)
    await rent.save().then(result=>{
        res.status(200).send({message: 'success'})

    }).catch(err=>{
        res.status(401).send({message: 'Something wrong'})
    })
    
}

module.exports = rentPay