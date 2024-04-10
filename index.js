const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require('bcrypt');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test DB connection
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});

// Define routes
app.get("/api/products", (req, res) => {
});

// Server Port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
