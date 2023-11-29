const User = require('../../models/userRegister/userRegister')
const verifyAdmin = async(req,res,next) =>{
    const email = req.query.email;

const admin = await User.find({userEmail: email})

 const userStatus = admin.pop()

 const userRole = userStatus.userRole

 if (userRole !== 'admin') {

   return res.status(401).send({message: 'unauthorized'})
    
 }

 res.status(200).send({message: 'admin'})



   

    




    
}

module.exports = verifyAdmin