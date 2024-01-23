const { log } = require("console");
const contactuser = require("../models/contactModel");
const fs = require("fs");

const viewcontact = async (req, res) => {
    try {
        const data = await contactuser.find({}).sort({ lastUpdateTime: -1 });
        return res.render("pages/adminindex", { data });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};
// const adminPage = async (req, res) => {
//   try {
//     const record = await admin.find({}).sort({ lastUpdateTime: -1 });
//     return res.render("pages/adminindex", { record });
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

// const newsadd = (req, res) => {
//   return res.render("pages/newsadd");
// };

const addContact = async (req, res) => {
  try {
    const { name, email, phone, message} = req.body;
    if (!name || !email || !phone || !message ) {
      console.log(`All field require`);
      return res.redirect("back");
    }
    const data = await contactuser.create({
        name, email, phone, message
    });
    if (data) {
      console.log("data save");
      return res.redirect("/admin");
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// ================================DElete======================
// const deleteNews = async (req, res) => {
//   try {
//     let id = req.query.id;
//     const img = await admin.findById(id);
//     fs.unlinkSync(img.image);
//     const del = await admin.findByIdAndDelete(id);
//     console.log(`delete`);
//     return res.redirect("back");
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };
// ============================Edit=============================
// const editNews = async (req, res) => {
//   try {
//     const id = req.query.id;
//     const single = await admin.findById(id);
//     return res.render("pages/UpdateAdmin", { single });
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

// =============================update===========================
// const updateNews = async (req, res) => {
//   try {
//     if (req.file) {
//       let id = req.body.editid;
//       const img = await admin.findById(id);
//       fs.unlinkSync(img.image);
//       const rec = await admin.findByIdAndUpdate(id, {
//         title: req.body.title,
//         category: req.body.category,
//         description: req.body.description,
//         date: req.body.date,
//         image: req.file.path,
//       });
//       console.log(`data Update`);
//       return res.redirect("/admin");
//     } else {
//       let id = req.body.editid;
//       const old = await admin.findById(id);
//       const rec = await admin.findByIdAndUpdate(id, {
//         title: req.body.title,
//         category: req.body.category,
//         description: req.body.description,
//         date: req.body.date,
//         image: old.image,
//       });
//       console.log(`data Update`);
//       return res.redirect("/admin");
//     }
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

// const signup = (req, res) => {
//   return res.render("pages/signup");
// };
// const login = (req, res) => {
//   return res.render("pages/login");
// };

// const register = async (req, res) => {
//   try {
//     const { name, email, password, cpassword } = req.body;
//     console.log(req.body);
//     if (cpassword == password) {
//       let user = await adduser.create({
//         name,
//         email,
//         password,
//       });

//       console.log("User registered");
//       return res.redirect("/login");
//     }
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

// const loginuser = async (req, res) => {
//   try {
//     let email = req.body.email;
//     let password = req.body.password;
//     let user = await adduser.findOne({ email: email });
//     if (!user || user.password != password) {
//       console.log("Email and password are wrong");
//       return res.redirect("back");
//     }
//     res.cookie("user", user);
//     return res.redirect("/admin");
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

module.exports = {
    addContact,
    viewcontact
    


};
