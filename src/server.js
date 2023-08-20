require("dotenv").config(); //để sử dụng process env
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

// const cat = new Kitten({ name: "Robert Nguyen Models" });
// cat.save();

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
