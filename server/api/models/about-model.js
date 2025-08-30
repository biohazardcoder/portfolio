
import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema ({
    title: {type: String, required: true},
    images:[{type: String}],
    description:{type:String, required:true},
    social:{type:String, required:true},
    footer:{type:String, required:true},
})

export default mongoose.model("About", AboutSchema);