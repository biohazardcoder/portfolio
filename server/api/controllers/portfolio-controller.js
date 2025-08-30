import Portfolio from "../models/portfoli-model.js"

export const  getAllPortfolio= async (_, res) => {
try {

    const portfolio = await Portfolio.find();
    res.status(200).json(portfolio);

}
catch (error) {
    console.log("Error found on Portfolio",error)
}   }

export const  createNewPortfolio = async (req,res) => {
 try {
     const {title,image,description,url} = req.body
     const newPortfolio = await Portfolio({
        title,image,description,url
     });
     await newPortfolio.save();
     res.status(200).json(newPortfolio);
 }
 catch (error) {
    console.log(error, "Error occurs on Portfolio ");

}
}
export const updatePortfolio = async (req,res) => {
    try {
        const {id} = req.params;
        const {title,image,description, url} = req.body;
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, {
            title,image,description, url
        }, {new:true}); 
        res.status(200).json(updatedPortfolio);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}

export const deletePortfolio = async (req,res) => {
    try {
        const {id} = req.params;
        await Portfolio.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}


