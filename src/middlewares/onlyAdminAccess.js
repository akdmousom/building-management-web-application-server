const User = require('../models/userRegister/userRegister')
const onlyAdminAccess = async (req, res, next) => {
    const email = req.query.email;

    const admin = await User.find({ userEmail: email })

    const userStatus = admin.pop()

    const userRole = userStatus?.userRole

    if (userRole !== 'admin') {

        return res.status(401).send({ message: 'unauthorized admin' })

    }
    next()
}

module.exports = onlyAdminAccess