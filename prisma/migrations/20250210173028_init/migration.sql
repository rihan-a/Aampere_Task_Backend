-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "range_km" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "battery_capacity_kWh" DOUBLE PRECISION NOT NULL,
    "charging_speed_kW" DOUBLE PRECISION NOT NULL,
    "seats" INTEGER NOT NULL,
    "drivetrain" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "autopilot" BOOLEAN NOT NULL,
    "kilometer_count" TEXT NOT NULL,
    "accidents" BOOLEAN NOT NULL,
    "accident_description" TEXT,
    "images" TEXT[],

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);
