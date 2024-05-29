/*
  Warnings:

  - You are about to drop the column `userId` on the `members` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_userId_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "userId";
