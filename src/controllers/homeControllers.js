const connection = require("../config/database");
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getName = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUSer = (req, res) => {
  console.log("req body>>> ", req.body);
  res.send("create a new user");
};

module.exports = {
  getHomePage,
  getABC,
  getName,
  postCreateUSer,
};
