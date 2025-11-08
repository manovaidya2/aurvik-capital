import express from "express";
import { submitContactForm, getAllContacts, deleteContact } from "../controllers/contactController.js";

const router = express.Router();

// POST: Save form data
router.post("/", submitContactForm);

// GET: Fetch all contacts (for admin)
router.get("/", getAllContacts);

// DELETE: remove contact
router.delete("/:id", deleteContact);
export default router;
