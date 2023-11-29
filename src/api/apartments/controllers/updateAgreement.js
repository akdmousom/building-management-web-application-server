const aggrementModel = require('../../../models/apartments/agreement')

const updateAgreement = async (req,res) =>{
    const {id} = req.params
    await aggrementModel.findOneAndUpdate({_id : id}, {status: 'checked'}).then(result =>{
        res.send(result)
    }).catch(error=>{
        res.send(error)
    })
}

module.exports = updateAgreement