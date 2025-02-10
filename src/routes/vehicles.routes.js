const express = require('express');
const vehiclesController = require('../controllers/vehicles.controller');

const router = express.Router();

// GET all vehicles
router.get('/', vehiclesController.getAllVehicles);

// Search vehicles
router.get('/search', vehiclesController.searchVehicles);

// CREATE a new vehicle
router.post('/', vehiclesController.createVehicles);

// UPDATE a vehicle
router.put('/:id', vehiclesController.updateVehicles);

// DELETE a vehicle
router.delete('/:id', vehiclesController.deleteVehicles);

module.exports = router;