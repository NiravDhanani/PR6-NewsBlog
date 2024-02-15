const mongoose = require('mongoose')

const Userdata = mongoose.Schema({
    name : {
        type:String,
        require : true,
    },
    name : {
        type:String,
        require : true,
    },
    password : {
        type:String,
        require : true,
    },
})

const registerData =  mongoose.model('RegisterData',Userdata)

module.exports = registerData;