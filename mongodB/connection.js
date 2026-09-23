const express = require('express');

const mongodb = require('mongodb'); // mongo module use

const app = express();

const client = new mongodb.MongoClient("mongodb://localhost:27017");
// new keyword for class and client is object of MongoClient class
// that helps to establish connection with MongoDB server

client.connect().then(() => {

    console.log("MongoDB connected successfully");

}).catch((err) => {

    console.log("MongoDB connection failed", err);

});

const errorMiddleware = (error, req, res, next) => {

    res.status(error.status || 500).json({

        success: false,
        message: error.message || "Internal Server Error"

    });
};

app.use(errorMiddleware);

app.listen(8000, () => {

    console.log("Server is working on http://localhost:8000");

});