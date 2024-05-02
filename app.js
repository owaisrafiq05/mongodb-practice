import express from "express";
import mongoose from "mongoose";
import {PostModel} from "./models/PostSchema.js";

const app = express();
const PORT = 5000;
const uri = "mongodb+srv://admin:admin@cluster0.oplpgp2.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form

mongoose.connect(uri)
    .then(() => {
        console.log("Database connected");
        
    app.listen(PORT, ()=>{
        console.log("http://localhost:5000");
    })

    })
    .catch(err => console.log(err))



app.get("/",(req,res)=>{
    res.json("running");
})


app.post("/user", async (req,res)=>{
    try{
        console.log("req",req.body);
        res.json("hello");
        const {value, userID} = req.body;
        if(!value || !userID){
            req.json({
                message: "Required inputs are missing",
                status: false,
            })
            return
        }
        const obj = {
            value,
            userID,
        }
        const PostUpload = await PostModel.create(obj);
        res.json({
            message: "Post Created",
            data: PostUpload,
            status: true,
        })
    }
    catch(error){
        res.json({
            message: error.message,
            data: [],
            status: false,
        })
    }
})

// app.get("/getpost", async (req,res)=>{
//     try{
//         const postResponse = await  PostModel.find();

//     }
// })

// app.get("/product/:id",(req,res)=>{
//     const {id} = req.params;
//     const {id2} = req.query;
//     if(!id2){
//         res.json({
//             params: id,
//             status: true,
//             message: "Successfully run with  param only"
//         });
//     }
//     else{
//         res.json({
//             params: id,
//             status: true,
//             query: id2,
//             message: "Successfully run with  param and query"
//         });
        
//     }
// })

