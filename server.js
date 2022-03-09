const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connexion database with server 

const mongoUrl =
   "mongodb+srv://yasmine123:yasmine123@cluster0.atmh6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 mongoose.connect(mongoUrl, (err) => {
   err ? console.log(err) : console.log("database is connected");
 });
// parse the data
app.use(express.json());
app.use("/person", require("./router"));


const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log("server is running on port 5000");
});
