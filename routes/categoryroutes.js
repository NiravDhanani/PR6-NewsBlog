const express = require('express')
const route = express.Router()
const multer = require('multer')

const CategoryController = require('../controller/CategoryController')

// multer code 
const fileUpload = multer({storage : multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename : (req,file,cb)=>{
        let img = Date.now() + file.originalname //+Math.floor(Math.random() * 1000);
        cb(null,img);
    }
}
)}).single('cat_image')

  


// category routes  
route.get('/category',CategoryController.category)
route.get('/categoryAdd',CategoryController.categoryAdd)
route.post('/newCategoryAdd',fileUpload,CategoryController.newCategoryAdd)
route.get('/deleteCategory',fileUpload,CategoryController.deleteCategory)
route.get('/editCategory',fileUpload,CategoryController.categoryEdit)
route.post('/updatecategory',fileUpload,CategoryController.updatecategory)


module.exports = route;