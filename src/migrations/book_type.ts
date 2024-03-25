// MigrationScript.ts
import { MigrationInterface, QueryRunner } from "typeorm";
import { Book } from "../entity/book";
import { BookType } from "../entity/book_type";

export class AddBookTypeToExistingBooks1612345678902
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create book type table
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "book_type" (
                "id" SERIAL PRIMARY KEY,
                "type" VARCHAR NOT NULL,
                "price" DECIMAL(10, 2) NOT NULL
            );
        `);

    // Insert initial data into book type table
    await queryRunner.query(`
            INSERT INTO "book_type" ("type", "price") VALUES 
            ('Regular', 1.5),
            ('Fiction', 3),
            ('Novel', 1.5);
        `);

    // Add bookTypeId column to the Book table
    await queryRunner.query(`
            ALTER TABLE "book"
            ADD COLUMN "bookTypeId" INTEGER;
        `);

    // Add foreign key constraint
    await queryRunner.query(`
            ALTER TABLE "book"
            ADD CONSTRAINT "FK_Book_BookType" 
            FOREIGN KEY ("bookTypeId") REFERENCES "book_type"("id");
        `);

    // Store book_type id in book table
    const books = await queryRunner.manager.find(Book);
    const bookTypes = await queryRunner.manager.find(BookType);
    for (const book of books) {
      const randomIndex = Math.floor(Math.random() * bookTypes.length);
      const randomBookType = bookTypes[randomIndex];
      book.bookType = randomBookType;
      await queryRunner.manager.save(book);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove foreign key constraint
    await queryRunner.query(`
            ALTER TABLE "book"
            DROP CONSTRAINT "FK_Book_BookType";
        `);

    // Remove bookTypeId column from Book table
    await queryRunner.query(`
            ALTER TABLE "book"
            DROP COLUMN "bookTypeId";
        `);

    // Delete data from book type table
    await queryRunner.query(`
            DELETE FROM "book_type";
        `);

    // Drop book type table
    await queryRunner.query(`
            DROP TABLE "book_type";
        `);
  }
}
