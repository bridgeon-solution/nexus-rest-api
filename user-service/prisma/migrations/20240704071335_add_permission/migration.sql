/*
  Warnings:

  - You are about to drop the `Permissons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `EmployeePermissions` DROP FOREIGN KEY `EmployeePermissions_permissonsId_fkey`;

-- DropForeignKey
ALTER TABLE `_EmployeePermissions` DROP FOREIGN KEY `_EmployeePermissions_B_fkey`;

-- DropTable
DROP TABLE `Permissons`;

-- CreateTable
CREATE TABLE `Permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Permissions_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmployeePermissions` ADD CONSTRAINT `EmployeePermissions_permissonsId_fkey` FOREIGN KEY (`permissonsId`) REFERENCES `Permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeePermissions` ADD CONSTRAINT `_EmployeePermissions_B_fkey` FOREIGN KEY (`B`) REFERENCES `Permissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
