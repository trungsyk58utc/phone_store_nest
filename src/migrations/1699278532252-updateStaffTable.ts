import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateStaffTable1699278532252 implements MigrationInterface {
    name = 'UpdateStaffTable1699278532252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "staffs" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()', "updatedAt" TIMESTAMP DEFAULT now(), "account" character varying NOT NULL, "password" character varying NOT NULL, "frist_name" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_f3fec5e06209b46afdf8accf117" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "smart_phone" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:47:34.014244'`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:47:34.014244'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:47:34.014244'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:47:34.014244'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:47:34.014244'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 13:47:34.014244'`);
        await queryRunner.query(`DROP TABLE "staffs"`);
    }

}
