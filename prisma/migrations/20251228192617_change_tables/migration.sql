/*
  Warnings:

  - You are about to drop the `GenderIdentity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_professionId_fkey";

-- DropTable
DROP TABLE "public"."GenderIdentity";

-- DropTable
DROP TABLE "public"."Profession";

-- DropTable
DROP TABLE "public"."User";

-- DropEnum
DROP TYPE "public"."Gender";

-- CreateTable
CREATE TABLE "person" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "genderId" TEXT NOT NULL,
    "sexualityId" TEXT NOT NULL,
    "isEmployed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "personId" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genderIdentity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genderIdentity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sexuality" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sexuality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_email_key" ON "person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "genderIdentity_name_key" ON "genderIdentity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "genderIdentity_acronym_key" ON "genderIdentity"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "sexuality_name_key" ON "sexuality"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sexuality_acronym_key" ON "sexuality"("acronym");

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_sexualityId_fkey" FOREIGN KEY ("sexualityId") REFERENCES "sexuality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genderIdentity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
