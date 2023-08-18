require("dotenv").config(); //để sử dụng process env
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require("./config/database");

//config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

//test connection

// simple query
connection.query("select * from Users u", function (err, results, fields) {
  console.log("results>>> ", results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
