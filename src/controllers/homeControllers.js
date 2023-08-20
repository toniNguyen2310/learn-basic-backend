const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDservice");

const User = require("../models/user");

const getHomePage = async (req, res) => {
  let results = await User.find({});

  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getName = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  res.render("edit.ejs", { userEdit: user });
};

//POST

const postCreateUSer = async (req, res) => {
  let { email, name, city } = req.body;
  await User.create({
    email,
    name,
    city,
  });

  console.log("email>>> ", email, "name>>> ", name, "city>>> ", city);
  res.redirect("/");
};

const postUpdateUSer = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  res.redirect("/");
};

const postDeleteUSer = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  res.render("delete.ejs", { userDelete: user });
};

const postHandleRemoveUSer = async (req, res) => {
  const id = req.body.userId;
  await User.deleteOne({ _id: id });
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getABC,
  getName,
  postCreateUSer,
  getCreatePage,
  getUpdatePage,
  postUpdateUSer,
  postDeleteUSer,
  postHandleRemoveUSer,
};
