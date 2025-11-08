import Bootcamp from "../models/Bootcamp.js";
import fs from "fs";

// 📍 Create Bootcamp
export const createBootcamp = async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    } else if (req.body.imageUrl) {
      imageUrl = req.body.imageUrl;
    }

    const bootcamp = new Bootcamp({
      ...req.body,
      imageUrl,
    });

    await bootcamp.save();
    res.status(201).json(bootcamp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 📍 Get All Bootcamps
export const getBootcamp = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find().sort({ createdAt: -1 });
    res.status(200).json(bootcamps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📍 Update Bootcamp
export const updateBootcamp = async (req, res) => {
  try {
    const { id } = req.params;
    const bootcamp = await Bootcamp.findById(id);
    if (!bootcamp) return res.status(404).json({ message: "Bootcamp not found" });

    let imageUrl = bootcamp.imageUrl;
    if (req.file) {
      if (bootcamp.imageUrl && fs.existsSync(`.${bootcamp.imageUrl}`)) {
        fs.unlinkSync(`.${bootcamp.imageUrl}`);
      }
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedBootcamp = await Bootcamp.findByIdAndUpdate(
      id,
      { ...req.body, imageUrl },
      { new: true }
    );

    res.status(200).json(updatedBootcamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📍 Delete Bootcamp
export const deleteBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) return res.status(404).json({ message: "Bootcamp not found" });

    if (bootcamp.imageUrl && fs.existsSync(`.${bootcamp.imageUrl}`)) {
      fs.unlinkSync(`.${bootcamp.imageUrl}`);
    }

    await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bootcamp deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
