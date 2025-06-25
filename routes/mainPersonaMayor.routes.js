import express from "express";
import { getSummaryElderlyPerson } from "../controllers/mainPersonaMayor.controllers.js";

const router = express.Router();

router.get("/", getSummaryElderlyPerson);

export default router;