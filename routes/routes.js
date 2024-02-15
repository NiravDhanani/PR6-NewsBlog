const express = require('express')
const route = express.Router()
const multer = require('multer')

const IndexPageController = require('../controller/indexpageController')
const CategoryController = require('../controller/CategoryController')
const SubcategoryController = require('../controller/SubcategoryController');
const ExSubcategoryController = require('../controller/excategoryController');

// multer code 
const fileUpload = multer({storage : multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename : (req,file,cb)=>{
        let img = Date.now() + file.originalname;
        cb(null,img);
    }
}
)}).single('image')

// index page routes  
route.get('/admin',IndexPageController.AdminIndexPage)





// Extra subcategory route
route.get('/exsubcategory',ExSubcategoryController.excategoryPage)
route.get('/exsubcategoryAdd',ExSubcategoryController.exsubcategoryAdd)
route.post('/newexsubCategoryAdd',fileUpload,ExSubcategoryController.newexsubCategoryAdd)
route.get('/exsubcatedelete',fileUpload,ExSubcategoryController.exsubcatedelete)
route.get('/exsubcateedit',fileUpload,ExSubcategoryController.editPage)
route.post('/updateExcate',fileUpload,ExSubcategoryController.updateExcate)


module.exports = route;