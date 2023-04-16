const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/index.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.js"))
});

app.listen(port,()=>{
    console.log("http://localhost:3000");
})