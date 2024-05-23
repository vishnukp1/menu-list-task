const express = require('express');
const db = require('./src/db/db');
const foodRoutes = require("./src/routes/foodRoutes");
const cors = require('cors');
const morgan = require('morgan'); 
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

// Define routes

app.use("/api", foodRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});