import express from "express";

const app=express();
const Port=400;

app.get("/",(req,res)=>{
    res.send("Hello there");
})

app.listen(Port,()=>{
    console.log(`Listening to port ${Port}`);
})