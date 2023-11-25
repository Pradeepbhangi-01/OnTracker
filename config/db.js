const mongoose = require("mongoose");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// Connection to the MongoDB
mongoose.connect(
  "mongodb+srv://pradeepbhangi:12345@cluster0.1wxpsay.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

// Handling the error
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

// Connection successful
db.once("open", function () {
  console.log("Connected to database:- MongoDB");
});

module.exports = db;
