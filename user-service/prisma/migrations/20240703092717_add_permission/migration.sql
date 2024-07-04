-- CreateTable
CREATE TABLE `EmployeePermissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeeId` INTEGER NOT NULL,
    `permissonsId` INTEGER NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `EmployeePermissions_employeeId_permissonsId_key`(`employeeId`, `permissonsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmployeePermissions` ADD CONSTRAINT `EmployeePermissions_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeePermissions` ADD CONSTRAINT `EmployeePermissions_permissonsId_fkey` FOREIGN KEY (`permissonsId`) REFERENCES `Permissons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
