import express from "express";
import { getResumenPersonaMayor } from "../controllers/mainPersonaMayor.controllers.js";

const router = express.Router();

router.get("/", getResumenPersonaMayor);

export default router;