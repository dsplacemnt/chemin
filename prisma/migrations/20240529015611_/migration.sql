/*
  Warnings:

  - You are about to drop the column `user_id` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `movements` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[entity_id]` on the table `members` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[member_id]` on the table `movements` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movement_type_id]` on the table `movements` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movement_type_id` to the `movements` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_user_id_fkey";

-- DropForeignKey
ALTER TABLE "movements" DROP CONSTRAINT "movements_type_id_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "movements" DROP COLUMN "type_id",
ADD COLUMN     "movement_type_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "members_entity_id_key" ON "members"("entity_id");

-- CreateIndex
CREATE UNIQUE INDEX "movements_member_id_key" ON "movements"("member_id");

-- CreateIndex
CREATE UNIQUE INDEX "movements_movement_type_id_key" ON "movements"("movement_type_id");

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movements" ADD CONSTRAINT "movements_movement_type_id_fkey" FOREIGN KEY ("movement_type_id") REFERENCES "movement_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
