//importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
//configuring dotenv
dotenv.config();
console.clear();
//
//
//
//Parsing request must be before importing routes
app.use(express.json());
//
//
//
//importing routes

const getTopUp = require("./routes/topUp");
const addTopUp = require("./routes/addTopUp");
const privateRoute = require("./middelwares/privateRoute");
const adminRoute = require("./middelwares/adminRoute");

//middelwares routes
app.use("/", require("./routes/user"));
app.use("/", require("./routes/Product"));
app.use("/", require("./routes/topUp"));
app.use("/", require("./routes/order"));

app.use("/addtopup", addTopUp);

//
//example
//exapmle
//exapmle of private route
// const verify = require("./routes/privateRoute"); // importing the function that verify token
// const User = require("./model/User");
// //add it as a middelware
// app.get("/posts", verify, async (req, res) => {
//     let id = req.user._id;
//     console.log(id);
//     const currentUser = await User.findOne({ _id: id });
//     console.log(currentUser);
// });
//
//
//
//
//connecting to database
const connectDB = require("./config/connectDB");
connectDB();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

//launching the server
app.listen(
    process.env.PORT,
    console.log("server running and waiting for requests")
);
