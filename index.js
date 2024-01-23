const express = require('express')
const port = 8000
const app = express();
const db = require('./config/db')
const path = require('path')
const cookieParser = require("cookie-parser");
app.use(cookieParser())

app.use(express.urlencoded({extended:true}))
app.use('/public',express.static(path.join(__dirname,'public')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/',require('./routes/routes'));

app.set('view engine','ejs')



app.listen(port,(err)=>{
    if(err){
        console.log(`server not found`);
    }
    console.log(`server start on port ${port}`);
})