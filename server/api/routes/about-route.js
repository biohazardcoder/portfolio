import express from "express";
import { createNewAbout, deleteAbout, getAllAbout, updateAbout } from "../controllers/about-controller.js";

const router = express.Router();


router.get("/", getAllAbout);
router.delete("/:id", deleteAbout);
router.put("/:id", updateAbout);
router.post("/",createNewAbout)

export default router;
