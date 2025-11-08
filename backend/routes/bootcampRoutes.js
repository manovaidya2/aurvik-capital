import express from "express";
import {
  createBootcamp,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from "../controllers/bootcampController.js";

import upload from "../middleware/upload.js"; // optional if image upload

const router = express.Router();

router.post("/", upload.single("image"), createBootcamp);
router.get("/", getBootcamp);
router.put("/:id", upload.single("image"), updateBootcamp);
router.delete("/:id", deleteBootcamp);

export default router;
