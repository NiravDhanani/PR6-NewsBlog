const express = require('express')
const port = 8000
const app = express();
const db = require('./config/db')
const path = require('path')

app.set('view engine','ejs')


app.use('/public',express.static(path.join(__dirname,'public')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use(express.urlencoded({extended : true}))






app.use('/',require('./routes/categoryroutes'));
app.use('/',require('./routes/subcatroute'));
app.use('/',require('./routes/Exsubcategoryroute'));
app.use('/',require('./routes/routes'))
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false   
    }
    console.log(`server start on ${port}`);
})