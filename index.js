const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = 8000;

// db connection
const dbConnection = require("./db/dbConnection");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello everyone, Welcome to cipher school server");
});
dbConnection();
app.listen(PORT, () => {
  console.log(`Lisenting to port ${PORT}`);
});
