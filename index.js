"use strict";

const express = require("express");
require("./mongoDB");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Started at ${"http://localhost:3000"}`);
});

//app.use(express.json());
//entry point of our app....
