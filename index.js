const express=require("express");
const app=express();

app.listen(5000,(req,res)=>{
    console.log("Hello world")
})
app.get("/",(req,res)=> res.send("Hello World"));