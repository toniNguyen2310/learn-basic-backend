const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("hoan thanh");
});
module.exports = router;
