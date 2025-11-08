// routes/caseStudyRoutes.js
import express from 'express';
import {
  getAllCaseStudies,
  getCaseStudyById,
  createCaseStudy,
  updateCaseStudy,
  deleteCaseStudy
} from '../controllers/caseStudyController.js';

const router = express.Router();

// Routes
router.get('/', getAllCaseStudies);
router.get('/:id', getCaseStudyById);
router.post('/', createCaseStudy);
router.put('/:id', updateCaseStudy);
router.delete('/:id', deleteCaseStudy);

export default router;
