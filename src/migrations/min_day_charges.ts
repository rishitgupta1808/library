import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMinDayAndMinChargesToBookType1612345678902
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add new columns
    await queryRunner.query(`
            ALTER TABLE "book_type"
            ADD COLUMN "min_day" INTEGER,
            ADD COLUMN "min_charges" DECIMAL(10, 2);
            ADD COLUMN "charges_in_min_day" DECIMAL(10, 2);
        `);

    // Update existing rows with data
    await queryRunner.query(`
            UPDATE "book_type"
            SET "min_day" = CASE
                WHEN "type" = 'Regular' THEN 2
                WHEN "type" = 'Novel' THEN 2
                ELSE NULL
            END,
            "min_charges" = CASE
                WHEN "type" = 'Regular' THEN 2
                WHEN "type" = 'Novel' THEN 4.5
                ELSE NULL
            END;
            "charges_in_min_day" = CASE
                WHEN "type" = 'Regular' THEN 1
                ELSE NULL
            END;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove new columns
    await queryRunner.query(`
            ALTER TABLE "book_type"
            DROP COLUMN "min_day",
            DROP COLUMN "min_charges";
        `);
  }
}
