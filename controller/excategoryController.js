const CategoryModel = require("../model/categoryModel");
const SubcategoryModel = require("../model/SubcategoryModel");
const ExsubcategoryModel = require("../model/ExSubcategoryModel");
const fs = require("fs");

const excategoryPage = async (req, res) => {
  try {
    let exsubcat = await ExsubcategoryModel.find({})
      .populate("subcategoryId")
      .populate("categoryId");
    return res.render("pages/ExSubcategory", { exsubcat });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const exsubcategoryAdd = async (req, res) => {
  try {
    let category = await CategoryModel.find({});
    let subcategory = await SubcategoryModel.find({});
    return res.render("pages/ExSubcategoryAdd", { category, subcategory });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const newexsubCategoryAdd = async (req, res) => {
  try {
    let excate = await ExsubcategoryModel.create({
      categoryId: req.body.category,
      subcategoryId: req.body.subcategory,
      excat_name: req.body.excat_name,
      Eximage: req.file.path,
    });
    console.log(`exsubxategory Create`);
    return res.redirect("/exsubcategory");
  } catch (err) {
    console.log(err);
    return false;
  }
};

const exsubcatedelete = async (req, res) => {
  try {
    let del = await ExsubcategoryModel.findById(req.query.id);
    fs.unlinkSync(del.Eximage);
    await ExsubcategoryModel.findByIdAndDelete(req.query.id);
    console.log(`exsubcategory delete`);
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return false;
  }
};

const editPage = async (req, res) => {
  try {
    let category = await CategoryModel.find({});
    let subcategory = await SubcategoryModel.find({});
    let excategory = await ExsubcategoryModel.findById(req.query.id)
      .populate("categoryId")
      .populate("subcategoryId");

    return res.render("pages/ExSubcategoryEdit", {
      category,
      subcategory,
      excategory,
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const updateExcate = async (req,res)=>{
  try{
    let id = req.body.id;
    let old = await ExsubcategoryModel.findById(id);
    if(req.file){
      fs.unlinkSync(old.Eximage);
      let up = await ExsubcategoryModel.findByIdAndUpdate(id,{
        excat_name : req.body.excat_name,
        Eximage : req.file.path,
      })

    }else{
      let up = await ExsubcategoryModel.findByIdAndUpdate(id,{
        excat_name : req.body.excat_name,
        Eximage : old.Eximage,
    })

    }

    return res.redirect('/exsubcategory')

  } catch (err){
    console.log(err);
    return false;
  }
}


const filterData = async (req, res) => {
  try {
   
    const filterCriteria = req.query.category; 
  
    const filteredData = await ExsubcategoryModel.find({ category: filterCriteria });
    return res.render('pages/filteredData', { data: filteredData });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};



module.exports = {
  excategoryPage,
  exsubcategoryAdd,
  newexsubCategoryAdd,
  exsubcatedelete,
  editPage,
  updateExcate,
  filterData
};
