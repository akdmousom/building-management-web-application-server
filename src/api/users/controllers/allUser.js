const User = require('../../../models/userRegister/userRegister')
const allUser = async(req,res, next) =>{

    const users = await User.find({'userRole' : 'member'})
        
   return res.status(200).send({users: users})


}

module.exports = allUser;