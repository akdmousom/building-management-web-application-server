const Agreement = require('../../../models/apartments/agreement');

const getAgreement = async(req,res)=>{
    
  
    await Agreement.find().then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(401).send({message: 'Something Wrong'})
    })
    
}

module.exports = getAgreement