/*
  Warnings:

  - You are about to drop the `orderedBooks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orderedBooks` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orderedBooks" DROP CONSTRAINT "orderedBooks_bookId_fkey";

-- DropForeignKey
ALTER TABLE "orderedBooks" DROP CONSTRAINT "orderedBooks_orderId_fkey";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "orderedBooks" JSONB NOT NULL;

-- DropTable
DROP TABLE "orderedBooks";
