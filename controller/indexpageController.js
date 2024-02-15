
const AdminIndexPage = (req,res)=>{
    try{
        return res.render('pages/adminindex')
    } catch (err){
        console.log(err);
        return false;
    }
}


module.exports = {
    AdminIndexPage
}