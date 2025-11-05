import express from 'express';
import CaseStudy from '../models/CaseStudy.js';

const router = express.Router();

// Get All Case Studies
router.get('/', async (req, res, next) => {
  try {
    console.log('📖 Fetching case studies...');
    const cases = await CaseStudy.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${cases.length} case studies`);
    res.json(cases);
  } catch (error) {
    console.error('❌ Error fetching case studies:', error);
    next(error);
  }
});

// Get Single Case Study
router.get('/:id', async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id);
    if (!caseStudy) return res.status(404).json({ error: 'Case Study not found' });
    res.json(caseStudy);
  } catch (error) {
    console.error('❌ Error fetching case study:', error);
    next(error);
  }
});

// Create Case Study
router.post('/', async (req, res, next) => {
  try {
    const { title, subtitle, challenge, solution, result, image, pdfFile, pdfName } = req.body;
    
    console.log('➕ Creating case study:', title);
    
    if (!title || !subtitle || !challenge || !solution || !result) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const caseStudy = new CaseStudy({
      title,
      subtitle,
      challenge,
      solution,
      result,
      image,
      pdfFile,
      pdfName
    });

    await caseStudy.save();
    console.log('✅ Case study created:', caseStudy._id);
    res.status(201).json({ message: 'Case Study created successfully', caseStudy });
  } catch (error) {
    console.error('❌ Error creating case study:', error);
    next(error);
  }
});

// Update Case Study
router.put('/:id', async (req, res, next) => {
  try {
    console.log(`✏️  Updating case study: ${req.params.id}`);
    const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!caseStudy) return res.status(404).json({ error: 'Case Study not found' });
    console.log('✅ Case study updated');
    res.json({ message: 'Case Study updated successfully', caseStudy });
  } catch (error) {
    console.error('❌ Error updating case study:', error);
    next(error);
  }
});

// Delete Case Study
router.delete('/:id', async (req, res, next) => {
  try {
    console.log(`🗑️  Deleting case study: ${req.params.id}`);
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!caseStudy) return res.status(404).json({ error: 'Case Study not found' });
    console.log('✅ Case study deleted');
    res.json({ message: 'Case Study deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting case study:', error);
    next(error);
  }
});

export default router;
