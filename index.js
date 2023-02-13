const express=require("express");
const app=express();

const port = process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log("Deployed on port "+port )
})
app.get("/",(req,res)=> res.send("Hello World what is happening"))
