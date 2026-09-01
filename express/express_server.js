const express= require("express");
const app= express();

app.get("/",(req,res)=>{
res.send(`<h1>Welcome to my newest Express Server</h1>`);
});

app.listen(8000,()=>{
console.log("Server running on port 8000");
});


