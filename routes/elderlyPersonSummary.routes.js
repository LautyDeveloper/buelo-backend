import express from "express";
import { getSummaryElderlyPerson } from "../controllers/elderlyPersonSummary.controllers.js";

const router = express.Router();

router.get("/", getSummaryElderlyPerson);

export default router;