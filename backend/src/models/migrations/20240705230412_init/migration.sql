-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
