const vehiclesService = require('../services/vehicles.service');


// GET vehicles with pagination
const getAllVehicles = async (req, res) => {
    try {
        const { limit = 12, offset = 0 } = req.query;
        const result = await vehiclesService.getAllVehicles(parseInt(limit), parseInt(offset));
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Search vehicles with pagination
const searchVehicles = async (req, res) => {
    try {
        const { q, brand, minPrice, maxPrice, limit = 12, offset = 0 } = req.query;
        const cars = await vehiclesService.searchVehicles(q, brand, minPrice, maxPrice, parseInt(limit), parseInt(offset));
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE a new vehicle
const createVehicle = async (req, res) => {
    try {
        const newVehicle = await vehiclesService.createVehicle(req.body);
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE a vehicle
const updateVehicle = async (req, res) => {
    try {
        const updatedVehicle = await vehiclesService.updateVehicle(req.params.id, req.body);
        res.json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE a vehicle
const deleteVehicle = async (req, res) => {
    try {
        await vehiclesService.deleteVehicle(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = { getAllVehicles, searchVehicles, createVehicle, updateVehicle, deleteVehicle };