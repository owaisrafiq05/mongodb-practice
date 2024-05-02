import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    value:{
        type:String,
        required: true,
    },
    userID: {
        type:String,
        required: true,
    }
})

export const PostModel = mongoose.model("post",postSchema);