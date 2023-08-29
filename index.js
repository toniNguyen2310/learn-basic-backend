require("dotenv").config(); //để sử dụng process env
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/web");
const apiRoutes = require("./src/routes/api");
const connection = require("./src/config/database");
// const { getHomePage } = require("./src/controllers/homeControllers");

const app = express();

const hostname = process.env.HOST_NAME;
// connection();
//config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config template engine
configViewEngine(app);
//khai báo route
// app.get("/", (req, res) => {
//   res.send("ok");
// });

const port = process.env.PORT;
//test connection
// app.listen(port, () => {
//   console.log("Server is running on port " + port);
// });

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

// app.use("/v1/api", webRoutes);
app.use("/v1/api", apiRoutes);
