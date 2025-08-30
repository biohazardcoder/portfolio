import Blog from "../models/blog-model.js"

export const  getAllBlog= async (_, res) => {
try {

    const blog = await Blog.find();
    res.status(200).json(blog);

}
catch (error) {
    console.log("Error found on Blog",error)
}   }

export const getBlogById = async (req,res) => {
    try {
        const {id } = req.params

        const blog = await Blog.findById(id)
     res.status(200).json(blog);
    } catch (error) {
        console.log("Error found on Blog",error)
    }
}

export const  createNewBlog = async (req,res) => {
 try {
     const {title,image,description,date} = req.body
     const newblog = await Blog({
        title,image,description,date
     });
     await newblog.save();
     res.status(200).json(newblog);
 }
 catch (error) {
    console.log(error, "Error occurs on Blog ");

}
}
export const updateBlog = async (req,res) => {
    try {
        const {id} = req.params;
        const {title,image,description,date} = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            title,image,description,date
        }, {new:true}); 
        res.status(200).json(updatedBlog);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}

export const deleteBlog = async (req,res) => {
    try {
        const {id} = req.params;
        await Blog.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}


