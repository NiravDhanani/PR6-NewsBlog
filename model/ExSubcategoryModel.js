const mongoose = require('mongoose')

const CategoryModel = mongoose.Schema({
    categoryId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category',
    },
    subcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'subcategory'
    },
    excat_name : {
        type: String,
        require : true
    },
    Eximage : {
        type:String,
        require : true,
    },
});

const Category = mongoose.model('Exsubcategory',CategoryModel);

module.exports = Category;