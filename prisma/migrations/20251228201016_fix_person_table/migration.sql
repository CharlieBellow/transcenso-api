/*
  Warnings:

  - You are about to drop the column `email` on the `person` table. All the data in the column will be lost.
  - You are about to drop the column `isEmployed` on the `person` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `person` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."person_email_key";

-- AlterTable
ALTER TABLE "person" DROP COLUMN "email",
DROP COLUMN "isEmployed",
DROP COLUMN "password",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL;
