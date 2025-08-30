import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
    title: {type:String, required:true},
    date: {type:Date, required:true,default:Date.now()},
    image:{type:String, required:true},
    description:{type:String, required:true},
}, {timestamps:true})

export default mongoose.model("Blog", BlogSchema)