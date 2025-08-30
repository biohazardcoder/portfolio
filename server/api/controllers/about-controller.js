import About from "../models/about-model.js"

export const  getAllAbout = async (_, res) => {
try {
    const aboutMe = await About.find();
    res.status(200).json(aboutMe);
}
catch (error) {
    console.log("Error found on About",error)
}   }

export const  createNewAbout = async (req,res) => {
 try {
     const {title,images,description, social,footer} = req.body
     const newaboutMe = await About({
        title,images,description,social,footer
     });
     await newaboutMe.save();
     res.status(200).json(newaboutMe);
 }
 catch (error) {
    console.log(error, "Error occurs on About ");

 }
}

export const deleteAbout = async (req,res) => {
    try {
        const {id} = req.params;
        await About.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}

export const updateAbout = async (req,res) => {
    try {
        const {id} = req.params;
        const {title,images,description, social,footer} = req.body;
        const updatedAbout = await About.findByIdAndUpdate(id, {
            title,images,description,social, footer
        }, {new:true}); 
        res.status(200).json(updatedAbout);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}

