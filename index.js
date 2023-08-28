require("dotenv").config(); //để sử dụng process env
const express = require("express");
// const configViewEngine = require("./src/config/viewEngine");
// const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");

const app = express();
app.use(express.json());

// const hostname = process.env.HOST_NAME;
connection();
//config

// app.use(express.urlencoded({ extended: false }));

//config template engine
// configViewEngine(app);
//khai báo route
app.get("/", (req, res) => {
  res.send("ok");
});
// app.use("/", webRoutes);
const port = process.env.PORT;
//test connection
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

// (async () => {
//   try {
//     await connection();
//     app.listen(port, hostname, () => {
//       console.log(`backend zero app listening on port ${port}`);
//     });
//   } catch (error) {
//     console.log("Error connect to DB>> ", error);
//   }
// })();
