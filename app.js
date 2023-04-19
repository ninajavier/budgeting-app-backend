const express = require("express");
const app = express();
const logger = require("morgan");
const transactionController = require('./controllers/transactionsController.js');
const cors = require("cors");

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use('/transactions', transactionController);

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
  });

app.get("/", (req, res) => {
    res.send("Budget App");
});

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
});

module.exports = app;