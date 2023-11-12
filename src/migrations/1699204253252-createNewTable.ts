import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNewTable1699204253252 implements MigrationInterface {
    name = 'CreateNewTable1699204253252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "memories" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()', "updatedAt" TIMESTAMP DEFAULT now(), "label" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_aaa0692d9496fe827b0568612f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rams" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()', "updatedAt" TIMESTAMP DEFAULT now(), "label" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_8906f35fdde990e414227c87027" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "brands" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()', "updatedAt" TIMESTAMP DEFAULT now(), "label" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "price_types" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()', "updatedAt" TIMESTAMP DEFAULT now(), "label" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_623e93be1356fb26b7241a991a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 16:51:01.206746'`);
        await queryRunner.query(`DROP TABLE "price_types"`);
        await queryRunner.query(`DROP TABLE "brands"`);
        await queryRunner.query(`DROP TABLE "rams"`);
        await queryRunner.query(`DROP TABLE "memories"`);
    }

}
