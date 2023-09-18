const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv"); 
const ConnectDB = require("./config/db");

const app = express();

dotenv.config();

ConnectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));