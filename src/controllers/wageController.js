const wageService = require('../services/wageService');

function calculateWages(req, res) {
    try {
        const wages = wageService.calculateWages(req.body);
        res.json(wages);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during wage calculation' });
    }
}

module.exports = {
    calculateWages
};
