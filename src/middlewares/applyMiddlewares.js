const cors = require('cors');
const express = require('express');
const { LOCAL_CLIENT, CLIENT } = require('../config/default');




const applyMiddlewares = (app) => {
  app.use(cors({
    origin: ["https://building-management-syst-40685.web.app", "https://building-management-syst-40685.firebaseapp.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

  app.use(express.json());
}

module.exports = applyMiddlewares