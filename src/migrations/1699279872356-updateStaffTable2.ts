import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateStaffTable21699279872356 implements MigrationInterface {
    name = 'UpdateStaffTable21699279872356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staffs" ADD "last_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "staffs" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staffs" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:49:20.239076'`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:49:20.239076'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:49:20.239076'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:49:20.239076'`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:49:20.239076'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:49:20.239076'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:49:20.239076'`);
        await queryRunner.query(`ALTER TABLE "staffs" DROP COLUMN "last_name"`);
    }

}
