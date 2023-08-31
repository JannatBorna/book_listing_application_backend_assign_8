/*
  Warnings:

  - Changed the type of `role` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "review_and_ratings" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "review_and_ratings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "review_and_ratings" ADD CONSTRAINT "review_and_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_and_ratings" ADD CONSTRAINT "review_and_ratings_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
