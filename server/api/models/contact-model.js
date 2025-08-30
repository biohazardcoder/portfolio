import mongoose from "mongoose"

const ContactSchame = new mongoose.Schema({
    image:{type:String, required:true},
    backgroundColor:{type:String, required:true, default:"#fff"},
    hover:{type:String, required:true, default:"#fff"},
    url:{type:String, required:true},
})

export default mongoose.model("Contact", ContactSchame)