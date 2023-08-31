const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("../db");

const app = express.Router();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.post("/api/login2", (req, res) => {
  const { carnet, password } = req.body;
  console.log("body", req.body);

  var sql = "select * from docente WHERE carnet=? AND password =?";
  var params = [carnet, password];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (rows.length > 0) {
      res.json({
        message: "success",
        Login2: true,
      });
    } else {
      res.json({
        message: "Error al iniciar sesión",
        Login2: false,
      });
    }
  });
});

module.exports = app;
