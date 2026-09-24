
const express = require('express');
const mongodb = require('mongodb'); // MongoDB module

const app = express();

app.use(express.json()); // Middleware to parse JSON request body

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

            // student.insertOne({
            //     name: name,
            //     age: age,
            //     email: email,
            //     department: department
            // })

            student.insertMany(req.body)

            .then(() => {
                res.status(201).send("Student created successfully");
            })
            .catch((err) => {
                 res.status(500).send(err.message);
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