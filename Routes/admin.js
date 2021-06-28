const express = require('express');
const Router = express.Router();
const path = require('path');
const root = require('../utils/path');

Router.get('/add-item' , (req, res, body) => {
    res.sendFile(path.join(root ,"views" , 'add-item.html'));
})
Router.post('/add-item' , (req, res, body) => {
    // res.sendFile(path.join(__dirname , "../",  "views" , 'add-item.html'));
    console.log("post page")
})




module.exports = Router;