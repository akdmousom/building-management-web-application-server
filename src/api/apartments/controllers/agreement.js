const Agreement = require('../../../models/apartments/agreement');
const agreementController = async(req,res)=>{
    
    const newAgreement = new Agreement(req.body.data.apartmentDetails);
  
    await newAgreement.save().then((result)=>{
        if (result) {

            res.status(200).json({success: 'true'})
            
        }
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })

    // .then((res)=>{
    //     res.status(200).send({message: 'Thanks for this agreement'})
    // }).catch((err)=>{
    //     res.status(500).send({error: err.message})
    // })
}

module.exports = agreementController