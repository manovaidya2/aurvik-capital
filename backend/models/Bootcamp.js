import mongoose from "mongoose";

const bootcampSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    nextBatch: { type: String, required: true },
    schedule: { type: String, required: true },
    location: { type: String, required: true },
    limit: { type: String, required: true },
    price: { type: String, required: true },
    regularPrice: { type: String, required: true },
    imageUrl: { type: String, required: true },
    buttonText: { type: String, default: "Register Now" },
    buttonLink: { type: String, default: "#" },
     isActive: { type: Boolean, default: true }, // ✅ New
  },
  { timestamps: true }
);

export default mongoose.model("Bootcamp", bootcampSchema);
