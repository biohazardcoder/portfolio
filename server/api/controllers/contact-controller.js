import Contact from "../models/contact-model.js"

export const  getAllContact = async (_, res) => {
try {

    const contact = await Contact.find();
    res.status(200).json(contact);

}
catch (error) {
    console.log("Error found on Contact",error)
}   }

export const  createNewContact = async (req,res) => {
 try {
     const {image,backgroundColor,url,hover} = req.body
     const newcontact = await Contact({
        image,backgroundColor,url,hover
     });
     await newcontact.save();
     res.status(200).json(newcontact);
 }
 catch (error) {
    console.log(error, "Error occurs on Contact ");

 }
}

export const updateContact = async (req,res) => {
    try {
        const {id} = req.params;
        const {image,backgroundColor,url,hover} = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(id, {
            image,backgroundColor,url,hover
        }, {new:true}); 
        res.status(200).json(updatedContact);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}
export const deleteContact = async (req,res) => {
    try {
        const {id} = req.params;
        await Contact.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}


