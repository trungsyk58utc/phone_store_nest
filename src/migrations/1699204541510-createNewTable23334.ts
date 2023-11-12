import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNewTable233341699204541510 implements MigrationInterface {
    name = 'CreateNewTable233341699204541510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
    }

}
