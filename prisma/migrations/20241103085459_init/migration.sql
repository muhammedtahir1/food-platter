-- CreateTable
CREATE TABLE "Food" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "restaurantName" TEXT NOT NULL,
    "swiggyPrice" INTEGER NOT NULL,
    "zomatoPrice" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Food_name_key" ON "Food"("name");
