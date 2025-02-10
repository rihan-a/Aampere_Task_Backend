const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllVehicles = async () => {
    return await prisma.vehicle.findMany();
};

const searchVehicles = async (query, brand, minPrice, maxPrice) => {
    return await prisma.vehicle.findMany({
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
    });
};

module.exports = { getAllVehicles, searchVehicles };