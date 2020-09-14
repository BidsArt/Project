const express = require('express');
const customerAuth = require('../Middleware/verify-customer');

const Router = express.Router();

Router.get('/customerDetails/:id', customerAuth ,(req,res) => {
    // Here the customer Details will be sent for the particular id
});

Router.post('/login',(req,res) => {
    // Here the login request for customer will be handled
});

Router.post('/signup', (req,res)=> {
    // Here the signup request for customer will be handled
})

module.exports = Router;