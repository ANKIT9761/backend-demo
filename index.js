const express=require("express");
const app=express();

const port = process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log("Hello world")
})
app.get("/",(req,res)=> res.send("Hello World"))