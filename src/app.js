const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const classRoute = require('./routes/classRoute.js')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())


app.use('/', classRoute);

module.exports = app;