const express = require('express');
const Router = express.Router();
const path = require('path');
const root = require('../utils/path');

Router.get('/' , (req, res, body) => {
    res.sendFile(path.join(root ,  "views" , 'homepage.html'));
})

module.exports = Router;