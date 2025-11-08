import Contact from "../models/contactModel.js";

// @desc  Save contact form data
// @route POST /api/contact
export const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, phone, companyName, annualTurnover, message } = req.body;

    const newContact = new Contact({
      fullName,
      email,
      phone,
      companyName,
      annualTurnover,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully!",
      data: newContact,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc Get all submissions (for admin panel)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error fetching data" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.status(200).json({ success: true, message: "Contact deleted", data: deleted });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ success: false, message: "Error deleting contact" });
  }
};