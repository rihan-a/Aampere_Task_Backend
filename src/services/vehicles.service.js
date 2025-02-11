const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// GET vehicles with pagination 
const getAllVehicles = async (limit, offset) => {
    const [vehicles, total] = await Promise.all([
        prisma.vehicle.findMany({
            skip: offset,
            take: limit,
        }),
        prisma.vehicle.count(), // Get the total number of vehicles
    ]);

    return {
        data: vehicles,
        pagination: {
            total,
            limit,
            offset,
        },
    };
};

// Search vehicles with pagination
const searchVehicles = async (query, brand, minPrice, maxPrice, limit, offset) => {
    const [vehicles, total] = await Promise.all([
        prisma.vehicle.findMany({
            where: {
                OR: [
                    { brand: { contains: query, mode: 'insensitive' } },
                    { model: { contains: query, mode: 'insensitive' } },
                ],
                brand: brand ? { contains: brand, mode: 'insensitive' } : undefined,
                price: {
                    gte: minPrice ? parseFloat(minPrice) : undefined,
                    lte: maxPrice ? parseFloat(maxPrice) : undefined,
                },
            },
            skip: offset,
            take: limit,
        }),
        prisma.vehicle.count({
            where: {
                OR: [
                    { brand: { contains: query, mode: 'insensitive' } },
                    { model: { contains: query, mode: 'insensitive' } },
                ],
                brand: brand ? { contains: brand, mode: 'insensitive' } : undefined,
                price: {
                    gte: minPrice ? parseFloat(minPrice) : undefined,
                    lte: maxPrice ? parseFloat(maxPrice) : undefined,
                },
            },
        }),
    ]);

    return {
        data: vehicles,
        pagination: {
            total,
            limit,
            offset,
        },
    };
};

// get a vehicle by ID
const getVehicleById = async (id, vehicleData) => {
    return await prisma.vehicle.findUnique({
        where: { id },
        data: vehicleData,
    });
};


// CREATE a new vehicle
const createVehicle = async (vehicleData) => {
    return await prisma.vehicle.create({
        data: vehicleData,
    });
};
// UPDATE a vehicle
const updateVehicle = async (id, vehicleData) => {
    return await prisma.vehicle.update({
        where: { id },
        data: vehicleData,
    });
};

// DELETE a vehicle
const deleteVehicle = async (id) => {
    return await prisma.vehicle.delete({
        where: { id },
    });
};


module.exports = { getAllVehicles, searchVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle };