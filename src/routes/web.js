const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  getName,
  postCreateUSer,
} = require("../controllers/homeControllers");
//router.Method('/route',handler)

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/toniNguyen", getName);

router.post("/create-user", postCreateUSer);

module.exports = router;
