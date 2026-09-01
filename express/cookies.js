const express=require("express");
const cookieParser=require("cookie-parser");

const app= express();

app.use(cookieParser());

app.get("/example",(req,res,next)=>{
    
    
    // to request cookie from the client side we can use req.cookies
    
    const cookie=req.cookies;
    console.log(cookie);
    res.send("Cookie has been sent to the client");


    // to set cookie on the client side we use res.cookie("name","value") method
    res.cookie("name","John Doe");
    res.cookie("age","30");
    res.cookie("city","New York");
    res.send("Cookies have been set on the client side");

// to clear cookie on the client side we use res.clearCookie("entity_name") method
res.clearCookie("name");    

});

app.listen(8000,()=>{
    console.log("Server running on port 8000");
});
