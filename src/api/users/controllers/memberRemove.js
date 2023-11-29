const User = require('../../../models/userRegister/userRegister')
const memberRemove = async(req,res) => {
    const { id } = req.params;

    await User.findOneAndUpdate({_id: id }, {userRole : 'user'}, {new: true})
    .then(response=>{
        res.status(200).send({message: 'Success'})
    }).catch(err=>{
        res.status(401).send({message: 'Unauthorized'})
    })
    

    
   
};

module.exports = memberRemove

