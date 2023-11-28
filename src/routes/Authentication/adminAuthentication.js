const User = require('../../models/userRegister/userRegister')
const verifyAdmin = async(req,res,next) =>{
    const email = req.query.email;

    const admin = await User.find({userEmail: email})

 const userRole = admin[0].userRole;

 if (userRole !== 'admin') {

    return res.status(401).json({message: 'unauthorized'})
    
 }else{
    return res.status(300).send(userRole)
 }


    
}

module.exports = verifyAdmin