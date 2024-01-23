const mongoose = require('mongoose')
const ContactUser = mongoose.Schema({
    name : {
        type :String,
        require : true
    },
    email : {
        type :String,
        require : true
    },
    phone : {
        type :String,
        require : true
    },
    message : {
        type :String,
        require : true
    },
})



const Contact = mongoose.model('Contact-Form',ContactUser);


module.exports = Contact;