-- CreateTable
CREATE TABLE "genders" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sexualities" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sexualities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "socialName" TEXT,
    "slug" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "pronouns" TEXT NOT NULL,
    "genderId" TEXT NOT NULL,
    "sexualityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genders_acronym_key" ON "genders"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "genders_slug_key" ON "genders"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "sexualities_acronym_key" ON "sexualities"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "sexualities_slug_key" ON "sexualities"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "people_slug_key" ON "people"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "people_cpf_key" ON "people"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "people_rg_key" ON "people"("rg");

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_sexualityId_fkey" FOREIGN KEY ("sexualityId") REFERENCES "sexualities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
