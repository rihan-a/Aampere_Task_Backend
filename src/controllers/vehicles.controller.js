const vehiclesService = require('../services/vehicles.service');


// GET all vehicles
const getAllVehicles = async (req, res) => {
    try {
        const cars = await vehiclesService.getAllVehicles();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Search vehicles
const searchVehicles = async (req, res) => {
    try {
        const { q, brand, minPrice, maxPrice } = req.query;
        const cars = await vehiclesService.searchVehicles(q, brand, minPrice, maxPrice);
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