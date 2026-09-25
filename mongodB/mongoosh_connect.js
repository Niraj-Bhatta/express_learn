const express =require("express");
const mongoose =require("mongoose");

const app = express();
app.use(express.json());

const connectionUrl ="mongodb://localhost:27017/schoolDb";
mongoose.connect(connectionUrl)
.then(()=> console.log("Database connection successful"))
.catch((error) => console.log(error));

const errorMiddleware =(error,req,res,next)=>{
    res.status(500).send(error.message);
};

app.use(errorMiddleware);

app.listen(8000, ()=>{
    console.log("server is running on port 8000")
});