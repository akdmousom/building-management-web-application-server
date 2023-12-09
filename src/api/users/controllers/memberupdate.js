const User = require('../../../models/userRegister/userRegister')
const memberupdate = async(req,res) => {
    const { email } = req.query;

    await User.findOneAndUpdate({userEmail: email }, {userRole : 'member'}, {new: true})
    .then(response=>{
        res.status(200).send({message: 'Success'})
    }).catch(err=>{
        res.status(401).send({message: 'Unauthorized'})
    })
    

    
   
};

module.exports = memberupdate

