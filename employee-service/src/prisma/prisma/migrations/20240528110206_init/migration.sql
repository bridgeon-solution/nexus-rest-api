/*
  Warnings:

  - Added the required column `image` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `salary` VARCHAR(191) NOT NULL;
