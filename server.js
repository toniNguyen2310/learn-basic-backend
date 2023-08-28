require("dotenv").config(); //để sử dụng process env
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
// const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config template engine
configViewEngine(app);

//khai báo route
app.get("/", (req, res) => {
  res.send("ok");
});
// app.use("/", webRoutes);

//test connection
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to DB>> ", error);
  }
})();
