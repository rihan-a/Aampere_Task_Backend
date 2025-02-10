const vehiclesService = require('../services/vehicles.service');

const getAllVehicles = async (req, res) => {
    try {
        const cars = await vehiclesService.getAllVehicles();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const searchVehicles = async (req, res) => {
    try {
        const { q, brand, minPrice, maxPrice } = req.query;
        const cars = await vehiclesService.searchVehicles(q, brand, minPrice, maxPrice);
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllVehicles, searchVehicles };