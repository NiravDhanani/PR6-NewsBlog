const CategoryModel = require('../model/categoryModel');
const SubcategoryModel = require('../model/SubcategoryModel')
const ExSubcategoryModel = require('../model/ExSubcategoryModel')
const fs = require('fs')

const category = async(req,res)=>{
    try{
        let category = await CategoryModel.find({});
        return res.render('pages/category',{ category })
    } catch(err){
        console.log(err);
        return false;
    }
}

const categoryAdd = async(req,res)=>{
    try{
        return res.render('pages/categoryAdd')
    } catch(err){
        console.log(err);
        return false;
    }
}

const newCategoryAdd = async(req,res)=>{
    try{
        let data  =  await CategoryModel.create({
            cat_name : req.body.cat_name,
            cat_image : req.file.path,
        })
        console.log(`category add`);
        return res.redirect('/category')
    } catch(err){
        console.log(err);
        return false;
    }
}

const deleteCategory = async(req,res)=>{
    try{
        let old = await CategoryModel.findById(req.query.id);
        fs.unlinkSync(old.cat_image);
        let category = await CategoryModel.findByIdAndDelete(req.query.id);
        await SubcategoryModel.deleteMany({categoryId : req.query.id})
        await ExSubcategoryModel.deleteMany({categoryId : req.query.id})
        console.log('Date Delete Successful !!');
        return res.redirect('back')
        
    } catch(err){
        console.log(err);
        return false;
    }
}

const categoryEdit = async(req,res)=>{
    try{
      let category = await CategoryModel.findById(req.query.id)
      
      return res.render('pages/categoryEdit',{category})
    } catch(err){
      console.log(err);
      return false; 
    }
  }
  
  const updatecategory = async (req,res)=>{
    try{
      let id = req.body.id;
      let old = await CategoryModel.findById(id);
      if(req.file){
        fs.unlinkSync(old.cat_image);
        let up = await CategoryModel.findByIdAndUpdate(id,{
            cat_name : req.body.cat_name,
            cat_image : req.file.path
        })
  
      }else{
          let up = await CategoryModel.findByIdAndUpdate(id,{
            cat_name : req.body.cat_name,
            cat_image : old.image
        })

      }

      return res.redirect('/category')

    } catch (err){
      console.log(err);
      return false;
    }
  }

module.exports = {
    category,
    categoryAdd,
    newCategoryAdd,
    deleteCategory,
    categoryEdit,
    updatecategory

}