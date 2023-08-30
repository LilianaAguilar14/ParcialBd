const express = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const app = express.Router();

app.get("/", (req, res) => {
  jsonResponse(res, 200, "Hello World!");
});

module.exports = app;
