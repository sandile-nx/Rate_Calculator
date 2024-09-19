const express = require('express');
const router = express.Router();
const wageController = require('../controllers/wageController');

// Define route for wage calculation
router.post('/calculate', wageController.calculateWages);

module.exports = router;
