
const express = require('express');
const mongodb = require('mongodb'); // MongoDB module

const app = express();

// Create MongoDB client
const client = new mongodb.MongoClient("mongodb://localhost:27017");

// Connect to MongoDB
client.connect()
    .then(() => {

        console.log("MongoDB connected successfully");

        // Select database
        const db = client.db("schoolDb");

        // Select collection
        const student = db.collection("student");

        // POST route to insert student
        app.post("/student", (req, res, next) => {

            student.insertOne({
                name: "John Doe",
                age: 20,
                email: "john@email.com"
            })
            .then(() => {
                res.status(201).send("Student created successfully");
            })
            .catch((err) => {
                next(err);
            });

        });

        // Error handling middleware
        const errorMiddleware = (error, req, res, next) => {

            res.status(error.status || 500).json({
                success: false,
                message: error.message || "Internal Server Error"
            });

        };

        app.use(errorMiddleware);

        // Start Express server
        app.listen(8000, () => {

            console.log("Server is working on http://localhost:8000");

        });

    })
    .catch((err) => {

        console.log("MongoDB connection failed", err);

    });