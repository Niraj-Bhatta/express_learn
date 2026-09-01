const express=require("express");
const cookieParser=require("cookie-parser");

const app= express();
app.set("view engine","ejs");

app.get("/example",(req,res,next)=>{
    res.render('homepage.ejs')});

app.listen(8000,()=>{
    console.log("Server running on port 8000");
});