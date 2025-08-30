import express from "express";
import { createNewPortfolio,deletePortfolio,getAllPortfolio,updatePortfolio} from "../controllers/portfolio-controller.js";

const router = express.Router();

router.get("/", getAllPortfolio);
router.delete("/:id", deletePortfolio);
router.put("/:id", updatePortfolio);
router.post("/", createNewPortfolio);

export default router;
