import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Word");
});


app.get("/about",(req,res)=>{
    res.send("About Page");
});

app.get("/contact",(req,res)=>{
    res.send("Contact Page");
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});