const express = require('express');
const vehiclesController = require('../controllers/vehicles.controller');

const router = express.Router();

// GET all vehicles
router.get('/', vehiclesController.getAllVehicles);

// Search vehicles
router.get('/search', vehiclesController.searchVehicles);

// CREATE a new vehicle
router.post('/', vehiclesController.createVehicle);

// UPDATE a vehicle
router.put('/:id', vehiclesController.updateVehicle);

// DELETE a vehicle
router.delete('/:id', vehiclesController.deleteVehicle);

module.exports = router;