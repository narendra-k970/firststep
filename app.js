const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:"../config.env"});
require('./db/conn');
// const Mernpractice = require('./userSchema')

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Hello world`);
});

app.get('/about', (req, res) => {
    res.send(`Hello world about`);
});

app.get('/giveway', (req, res) => {
    res.send(`Hello world giveway`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello world contact`);
});

app.listen(PORT, ()=> {
    console.log('server is running at port no ${PORT}');
})