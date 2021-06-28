const express = require('express');
const app = express();
const admin = require('./Routes/admin');
const user = require('./Routes/User');
const path = require('path');
const root = require('./utils/path');

app.use(express.static(path.join(root , "public")));

app.use('/admin', admin);
app.use(user);
app.use((req,res,next)=>{
    res.sendFile(path.join(root , "views" , "404.html" ))
})

app.listen(3000);

