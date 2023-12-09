
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./src/db/dbConfig');

const http = require('http')
const app = require('./src/app');
const server = http.createServer(app)

const main = async()=>{
    await connectDB();
    server.listen(port,()=>{
        console.log(`Server port listining on ${port}`);
    })

}

main()