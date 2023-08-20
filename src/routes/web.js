const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  getName,
  postCreateUSer,
  getCreatePage,
  getUpdatePage,
  postUpdateUSer,
  postDeleteUSer,
  postHandleRemoveUSer,
} = require("../controllers/homeControllers");
//router.Method('/route',handler)

router.get("/abc", getABC);
router.get("/toniNguyen", getName);

router.get("/", getHomePage);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUSer);
router.post("/update-user", postUpdateUSer);

router.post("/delete-user/:id", postDeleteUSer);
router.post("/delete-user", postHandleRemoveUSer);

module.exports = router;
