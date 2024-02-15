const mongoose = require('mongoose')

const CategoryModel = mongoose.Schema({
    cat_name : {
        type: String,
        require : true
    },
    cat_image : {
        type:String,
        require : true,
    },
});

const Category = mongoose.model('category',CategoryModel);

module.exports = Category;