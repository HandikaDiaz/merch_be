/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `imgprofile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "imgprofile_profileId_key" ON "imgprofile"("profileId");
