const express = require("express");

const app = express();

// GET request
app.get("/example", (req, res) => {
    res.send("This is a GET request example");
});

// POST request
app.post("/example", (req, res) => {
    res.send("This is a POST request example");
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});