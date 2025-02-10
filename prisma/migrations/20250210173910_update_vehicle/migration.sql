/*
  Warnings:

  - Changed the type of `kilometer_count` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "kilometer_count",
ADD COLUMN     "kilometer_count" INTEGER NOT NULL;
