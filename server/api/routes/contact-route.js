import express from "express";
import { createNewContact,deleteContact,getAllContact,updateContact} from "../controllers/contact-controller.js";

const router = express.Router();


router.get("/", getAllContact);
router.delete("/:id", deleteContact);
router.put("/:id", updateContact);
router.post("/", createNewContact);

export default router;
