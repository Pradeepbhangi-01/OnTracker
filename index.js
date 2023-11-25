require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/routes");

// Setting Up view engine and Views Folder
app.set("view engine", "ejs");
app.set("views", "./views");

// Mongoose Connection
const { db } = require("./config/db");
db;

// Connecting Assets Folder / Static Files
app.use("/assets", express.static("./assets"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up routes
app.use(router);
const PORT = process.env.PORT || 7500;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
