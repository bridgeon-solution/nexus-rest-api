/*
  Warnings:

  - You are about to drop the column `employeeId` on the `Permissons` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Permissons` DROP FOREIGN KEY `Permissons_employeeId_fkey`;

-- AlterTable
ALTER TABLE `Permissons` DROP COLUMN `employeeId`;

-- CreateTable
CREATE TABLE `_EmployeePermissions` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EmployeePermissions_AB_unique`(`A`, `B`),
    INDEX `_EmployeePermissions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_EmployeePermissions` ADD CONSTRAINT `_EmployeePermissions_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeePermissions` ADD CONSTRAINT `_EmployeePermissions_B_fkey` FOREIGN KEY (`B`) REFERENCES `Permissons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
