import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateStaffTable31699284501756 implements MigrationInterface {
    name = 'UpdateStaffTable31699284501756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "staffs" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staffs" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 14:11:19.224225'`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 14:11:19.224225'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 14:11:19.224225'`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 14:11:19.224225'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 14:11:19.224225'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 14:11:19.224225'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-06 14:11:19.224225'`);
    }

}
