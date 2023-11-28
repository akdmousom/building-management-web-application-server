const User = require('../../../models/userRegister/userRegister')
const userRole = async(req,res)=>{
    const email = req.query.email;
    await User.find({userEmail : email})
    .then(result =>{
        res.status(200).json({message: result})
    }).catch(err=>{
        console.log(err);
    })
}

module.exports = userRole