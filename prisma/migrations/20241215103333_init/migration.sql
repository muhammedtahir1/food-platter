/*
  Warnings:

  - Added the required column `veg` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Food" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "swiggyPrice" INTEGER NOT NULL,
    "zomatoPrice" INTEGER NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "veg" BOOLEAN NOT NULL,
    CONSTRAINT "Food_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Food" ("id", "image", "name", "restaurantId", "swiggyPrice", "zomatoPrice") SELECT "id", "image", "name", "restaurantId", "swiggyPrice", "zomatoPrice" FROM "Food";
DROP TABLE "Food";
ALTER TABLE "new_Food" RENAME TO "Food";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
