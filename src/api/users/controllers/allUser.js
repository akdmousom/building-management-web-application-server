const User = require('../../../models/userRegister/userRegister')
const allUser = async(req,res) =>{

    const users = await User.find()
    
    res.status(200).send({users: users})


}

module.exports = allUser;