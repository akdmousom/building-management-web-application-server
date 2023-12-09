const rentData = require('../../../models/apartments/payrent')
const getPayRent = async(req,res)=>{
    const email = req.query.email
    await rentData.find({userEmail: email}).then(result=>{
        res.status(200).send(result)

    }).catch(err=>{
        res.status(401).send({message: 'Something wrong'})
    })
    
}

module.exports = getPayRent