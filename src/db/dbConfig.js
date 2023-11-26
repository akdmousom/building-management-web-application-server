const mongoose = require('mongoose');
require('dotenv').config();

const getConnection = () => {
    let connectionURI;

    if (process.env.NODE_ENV === 'development') {

        connectionURI = process.env.DATABASE_LOCAL;
        connectionURI = connectionURI.replace('<password>', process.env.DATABASE_LOCAL_PASSWORD ) 
        
    }else{
        connectionURI = process.env.DATABASE_PROD;
        connectionURI = connectionURI.replace('<password>', process.env.DATABASE_CLIENT_PASSWORD)
    }
    return connectionURI;
}

const connectDB = async()=> {
    console.log('connecting to the database...')
    const uri = getConnection();
    await mongoose.connect(uri, {dbName: process.env.DB_NAME})
    console.log('Database connected...');
}

module.exports = connectDB