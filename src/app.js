const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.get('/helth', async(req,res)=>{
    res.send(`Server is running`)
})

app.all('*', async(req,res,next)=>{
    const error = new Error(`The requested url is invalid: [${req.url}]`)
    error.status = 404
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({message: err.message})
})

app.listen(port, ()=>{

    console.log(`Server running on port ${port}`);

})