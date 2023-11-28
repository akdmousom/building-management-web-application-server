const express = require('express');
const User = require('../../models/userRegister/userRegister');
const registerUser = require('../../api/registerUser/controllers/registerUser');
const router = express.Router();

router.post('/api/v1/register',registerUser)

router.get('/api/v1/users', async(req,res)=>{
    const email = req.query.email;
    await User.find({userEmail : email})
    .then(result =>{
        res.status(200).json({message: result})
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router