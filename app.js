const express = require("express");
const app = express();

const path = require("path");

const cookieParser = require("cookie-parser");

// if (process.env.NODE_ENV !== "production") {
require("dotenv").config({ path: "config/config.env" });
// }

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   next();
// });



// Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");
const story = require("./routes/story");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);
app.use("/api/v1", story);

module.exports = app;
