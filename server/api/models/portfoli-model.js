import mongoose from "mongoose"

const PortfolioSchema = new mongoose.Schema({
    image:{type:String, required:true},
    video:{type:String},
    title:{type:String, required:true},
    description: {type:String, required:true},
    url:{type:String, required:true},
})

export default mongoose.model("Portfolio", PortfolioSchema)