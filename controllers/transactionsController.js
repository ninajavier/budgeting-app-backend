const express = require('express');
const transactions = express.Router();
const transactionsArray = require("../models/transaction.js");

// get all
transactions.get("/", (req, res) => {
    res.status(202).json(transactionsArray);
});

// get one transaction
transactions.get('/:id', (req, res) => {
    const { id } = req.params;
    const transactions = transactionsArray[id];
    if (transactions) {
        res.status(202).json(logsArray[id]);
    } else {
        res.redirect(404);
    }
});

// create
transactions.post('/', (req, res) => {
    const newTransaction = req.body;
    transactionsArray.push(newTransaction);
    res.status(202).json(transactionsArray);
})

// update
transactions.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedTransaction = req.body;

    if (transactionsArray[id]) {
        transactionsArray[id] = updatedTransaction;
        res.status(202).json(transactionsArray[id]);
    } else {
        res.status(404).send(`There was no transaction with the id of ${id}`);
    }
})

// delete
transactions.delete('/:id', (req, res) => {
    const { id } = req.params;
    const updatedArray = transactionsArray.splice(id, 1);

    if (transactionsArray[id]) {
        res.status(202).json(updatedArray);
    } else {
        res.status(404).send(`There was no transaction with the id of ${id}`);
    }
})

module .exports = transactions;