-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('INTERN', 'ADMIN', 'SUPERADMIN');

-- CreateTable
CREATE TABLE "public"."Agent" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "public"."Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agent_email_key" ON "public"."Agent"("email");
