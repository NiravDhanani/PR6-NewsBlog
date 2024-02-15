const CategoryModel = require("../model/categoryModel");
const SubcategoryModel = require("../model/SubcategoryModel");
const ExSubcategoryModel = require("../model/ExSubcategoryModel")
const fs = require('fs');

const subcategoryPage = async (req, res) => {
  try {
    let category = await CategoryModel.find({})
    let subcat = await SubcategoryModel.find({}).populate('categoryId')
    return res.render("pages/Subcategory",{ subcat , category});
  } catch (err) {
    console.log(err);
    return false;
  }
};

const subcategoryAdd = async (req, res) => {
  try {
    let category = await CategoryModel.find({});
    return res.render("pages/subcategoryAdd",{ category });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const newsubCategoryAdd = async (req, res) => {
  try {
    await SubcategoryModel.create({
      categoryId: req.body.category,
      subcat_name: req.body.subcat_name,
      subcat_date: req.body.subcat_date,
      subcat_image: req.file.path,
    });
    console.log("Sub category add");
    return res.redirect("/subcategory");
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deletesubcategory = async (req,res)=>{
  try{
    let del =  await SubcategoryModel.findById(req.query.id);
    fs.unlinkSync(del.subcat_image);
    await SubcategoryModel.findByIdAndDelete(req.query.id);
    await ExSubcategoryModel.deleteMany({subcategoryId : req.query.id});
    console.log('subcategory Delete');
    return res.redirect('back')
  } catch (err) {
    console.log(err);
    return false;
  }
}

const subcategoryEdit = async(req,res)=>{
  try{
    let category = await CategoryModel.find({})
    let subcat = await SubcategoryModel.findById(req.query.id).populate('categoryId')
    return res.render('pages/subcategoryedit',{category,subcat})
  } catch(err){
    console.log(err);
    return false;
  }
}

const updatesubCategory = async (req,res)=>{
  try{
    let id = req.body.id;
    let old = await SubcategoryModel.findById(id);
    if(req.file){
      fs.unlinkSync(old.subcat_image);
      let up = await SubcategoryModel.findByIdAndUpdate(id,{
          subcat_name : req.body.subcat_name,
          subcat_date :req.body.subcat_date,
          subcat_image : req.file.path
      })

    }else{
      let up = await SubcategoryModel.findByIdAndUpdate(id,{
        subcat_name : req.body.subcat_name,
        subcat_date :req.body.subcat_date,
        subcat_image : old.subcat_image,
    })

    }

    return res.redirect('/subcategory')

  } catch (err){
    console.log(err);
    return false;
  }
}

module.exports = {
  subcategoryPage,
  subcategoryAdd,
  newsubCategoryAdd,
  deletesubcategory,
  subcategoryEdit,
  updatesubCategory
};
