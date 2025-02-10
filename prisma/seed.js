const { PrismaClient } = require('@prisma/client');
const vehiclesData = require('../vehicles.json');

const prisma = new PrismaClient();

const seedDatabase = async () => {
    try {
        await prisma.vehicle.deleteMany(); // Clear existing data
        await prisma.vehicle.createMany({ data: vehiclesData });
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await prisma.$disconnect();
    }
};

seedDatabase();