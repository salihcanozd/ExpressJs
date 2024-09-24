import express from "express";
import parser from "body-parser";

const app = express();
const port = 3000;

app.use(parser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile("/workspaces/ExpressJs/public/index.html")
})

app.post("/submit",(req,res)=>{
    console.log(req.body);

    res.send("About Page");
});



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});