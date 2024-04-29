// const uri = "mongodb+srv://admin:admin@cluster0.oplpgp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

import express from "express";

const app = express();
const PORT = 5000;

app.get("/",(req,res)=>{
    res.json("running");
})

app.get("/product/:id",(req,res)=>{
    const {id} = req.params;
    const {id2} = req.query;
    if(!id2){
        res.json({
            params: id,
            status: true,
            message: "Successfully run with  param only"
        });
    }
    else{
        res.json({
            params: id,
            status: true,
            query: id2,
            message: "Successfully run with  param and query"
        });
        
    }
})


app.listen(PORT, ()=>{
    console.log("http://localhost:5000");
})