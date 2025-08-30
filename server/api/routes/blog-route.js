import express from "express";
import { createNewBlog,deleteBlog,getAllBlog,getBlogById,updateBlog} from "../controllers/blog-controller.js";

const router = express.Router();


router.get("/", getAllBlog);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlog);
router.put("/:id", updateBlog);
router.post("/", createNewBlog);

export default router;
