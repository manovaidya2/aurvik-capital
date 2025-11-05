import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  result: { type: String, required: true },
  image: { type: String },
  pdfFile: { type: String },
  pdfName: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('CaseStudy', caseStudySchema);
