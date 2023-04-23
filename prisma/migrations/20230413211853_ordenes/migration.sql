/*
  Warnings:

  - You are about to drop the column `pediso` on the `orden` table. All the data in the column will be lost.
  - Added the required column `pedido` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `pediso`,
    ADD COLUMN `pedido` JSON NOT NULL;
