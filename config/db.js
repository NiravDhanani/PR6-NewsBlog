const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/PR-6NEWS-BLOG')

const db = mongoose.connection

db.on('connected',(err)=>{
    if(err){
        console.log(`DB not connected`);
    }
    console.log(`DB Connected`);
})