-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_personId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "personId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
