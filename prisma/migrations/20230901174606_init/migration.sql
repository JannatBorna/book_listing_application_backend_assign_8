/*
  Warnings:

  - You are about to drop the `book_category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "book_category" DROP CONSTRAINT "book_category_bookId_fkey";

-- DropForeignKey
ALTER TABLE "book_category" DROP CONSTRAINT "book_category_categoryId_fkey";

-- DropTable
DROP TABLE "book_category";
