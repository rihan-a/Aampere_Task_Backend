/*
  Warnings:

  - You are about to alter the column `range_km` on the `Vehicle` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `battery_capacity_kWh` on the `Vehicle` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `charging_speed_kW` on the `Vehicle` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "range_km" SET DATA TYPE INTEGER,
ALTER COLUMN "battery_capacity_kWh" SET DATA TYPE INTEGER,
ALTER COLUMN "charging_speed_kW" SET DATA TYPE INTEGER;
