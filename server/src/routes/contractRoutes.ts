import express from "express";
import { contract } from "../controllers/contractController";

const router = express.Router()

router.get("/contract", contract)

export default router; 