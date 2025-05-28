import express from "express";
import { createUrl, getUniqueId } from "../controllers/url.controller.js";
const router = express.Router();

router.post("/url", createUrl);
router.get("/:shortId", getUniqueId)
export default router;