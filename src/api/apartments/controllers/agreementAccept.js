const Agreement = require('../../../models/apartments/agreement');

const agreementAccept = async(req,res)=>{
    
    const email = req.query.email
  
    await Agreement.find({userEmail: email}).then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(401).send({message: 'Something Wrong'})
    })
    
}

module.exports = agreementAccept