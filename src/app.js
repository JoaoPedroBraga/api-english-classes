const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const classRoute = require('./routes/classRoute.js')
const { connectToMongo } = require('./config/connect/connect.js')

connectToMongo();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())


app.use('/', classRoute);

module.exports = app;