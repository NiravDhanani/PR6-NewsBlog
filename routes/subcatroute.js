const express = require('express')
const route = express.Router()
const multer = require('multer')


const SubcategoryController = require('../controller/SubcategoryController');


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
)}).single('subcat_image')



//subcategory routes 
route.get('/subcategory',SubcategoryController.subcategoryPage)
route.get('/subcategoryAdd',SubcategoryController.subcategoryAdd)
route.post('/newsubCategoryAdd',fileUpload,SubcategoryController.newsubCategoryAdd)
route.get('/deletesubcategory',fileUpload,SubcategoryController.deletesubcategory)
route.get('/editsubcategory',fileUpload,SubcategoryController.subcategoryEdit)
route.post('/updatesubCategory',fileUpload,SubcategoryController.updatesubCategory)





module.exports = route;