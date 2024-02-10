const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  next();
});

app.use(cookieParser());

// Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
