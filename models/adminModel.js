const mongoose = require('mongoose')
const loginUser = mongoose.Schema({
    title : {
        type :String,
        require : true
    },
    category : {
        type :String,
        require : true
    },
    description : {
        type :String,
        require : true
    },
    image : {
        type :String,
        require : true
    },
    date : {
        type :String,
        require : true
    },
    lastUpdateTime: { 
        type: Date, 
        default: Date.now 
    },
})



const admin = mongoose.model('ADMIN',loginUser);


module.exports = admin;