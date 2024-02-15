const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CRUD_WITH_OTP_PASSPORT')

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log(`DB Not connected`);
        return false;
    }
    console.log(`DB CONNECTED`);
})

