const express = require('express');
const applyMiddlewares = require('./middlewares/applyMiddlewares');
const connectDB = require('./db/dbConfig');
require('dotenv').config();
const apartmentRoutes = require('./routes/Apartments/index');
const authenticationRoute = require('../src/routes/Authentication')
const registerUserRoute = require('../src/routes/RegisterUser/registerUser')
const announcementRoute = require('./routes/Announcement')
const payment = require('../src/routes/Payment')

const app = express();
const port = process.env.PORT || 5000;

applyMiddlewares(app)

app.use(apartmentRoutes)
app.use(authenticationRoute)
app.use(registerUserRoute)
app.use(announcementRoute)
app.use(payment)


















app.get('/helth', async (req, res) => {
    res.send(`Server is running`)
})

app.all('*', async (req, res, next) => {
    const error = new Error(`The requested url is invalid: [${req.url}]`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message })
})

// const main = async () => {
//     await connectDB();

//     app.listen(port, () => {

//         console.log(`Server running on port ${port}`);

//     })

// }
// main()

module.exports = app