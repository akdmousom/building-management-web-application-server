const cors = require('cors');
const express = require('express');
const { LOCAL_CLIENT, CLIENT } = require('../config/default');




const applyMiddlewares = (app) =>{
    app.use(cors({
        origin: [process.env.LOCAL_CLIENT],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      }));

    app.use(express.json());
}

module.exports = applyMiddlewares