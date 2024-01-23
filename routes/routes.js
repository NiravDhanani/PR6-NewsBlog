const express = require('express')
const route = express.Router();
const multer = require('multer')
const fs = require('fs')

const adminController = require('../controller/adminController')
const contactController = require('../controller/contactform')

const storage = multer.diskStorage({
    destination:(req,files,cb)=>{
        cb(null,'uploads')
        if(!fs.existsSync('uploads')){
            fs.mkdirSync('uploads')
        }
    },
    filename:(req,file,cb)=>{
        let fname = Date.now()+file.originalname;
        cb(null,fname);
    }
})

const uploadFile = multer({storage : storage}).single('image');

route.get('/',adminController.indexPage);
route.get('/admin',adminController.adminPage);
route.get('/newsAdd',adminController.newsadd);
route.post('/addNews',uploadFile,adminController.addNews);
route.get('/deleteAdminData',uploadFile,adminController.deleteNews);
route.get('/editAdminData',adminController.editNews);
route.post('/UpdateNews',uploadFile,adminController.updateNews);

route.get('/login',adminController.login);
route.get('/signup',adminController.signup);
route.post('/registerUser',adminController.register);
route.post('/loginUser',adminController.loginuser);
route.get('/logout',adminController.logout);




route.post('/addcontact',adminController.addContact);
route.get('/contact',adminController.viewcontact);
route.get('/deleteContact',adminController.deleteConatact);

module.exports = route;