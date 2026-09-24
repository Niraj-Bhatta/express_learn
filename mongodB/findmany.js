
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

        // get student data with the find many data.

        // app.get("/students",(req,res,next)=>{
        //     const {department} = req.query;

        //     student.find({department : department}).toArray()
        //     .then( (data)=>res.status(200).json(data) )
        //     .catch((error)=> res.status(500).send(error.message))
        
        // });
 app.get("/students",(req,res,next)=>{
            const {age} = req.query;
            console.log(typeof parseInt(age));

            student.find({age : parseInt(age)}).toArray()
            .then( (data)=>res.status(200).json(data) )
            .catch((error)=> res.status(500).send(error.message))
        
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