import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNewTable23451699204638074 implements MigrationInterface {
    name = 'CreateNewTable23451699204638074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "smart_phone" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()', "updatedAt" TIMESTAMP DEFAULT now(), "model" character varying NOT NULL, "price" character varying NOT NULL, "brand_id" integer, "color_id" integer, "ram_id" integer, "memory_id" integer, "price_type_id" integer, CONSTRAINT "PK_c7bf825bf0c5f600831dc0a9bdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ADD CONSTRAINT "FK_a53913db06ef78ea22128a6a9a5" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ADD CONSTRAINT "FK_6fefc72a8dae52d1ab6adc21310" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ADD CONSTRAINT "FK_c511996329ceabefe8b966d84b2" FOREIGN KEY ("ram_id") REFERENCES "rams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ADD CONSTRAINT "FK_cfed48152b10d0fef94ad96971b" FOREIGN KEY ("memory_id") REFERENCES "memories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "smart_phone" ADD CONSTRAINT "FK_39f99cdd961d5275375998ed878" FOREIGN KEY ("price_type_id") REFERENCES "price_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "smart_phone" DROP CONSTRAINT "FK_39f99cdd961d5275375998ed878"`);
        await queryRunner.query(`ALTER TABLE "smart_phone" DROP CONSTRAINT "FK_cfed48152b10d0fef94ad96971b"`);
        await queryRunner.query(`ALTER TABLE "smart_phone" DROP CONSTRAINT "FK_c511996329ceabefe8b966d84b2"`);
        await queryRunner.query(`ALTER TABLE "smart_phone" DROP CONSTRAINT "FK_6fefc72a8dae52d1ab6adc21310"`);
        await queryRunner.query(`ALTER TABLE "smart_phone" DROP CONSTRAINT "FK_a53913db06ef78ea22128a6a9a5"`);
        await queryRunner.query(`ALTER TABLE "rams" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "price_types" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "memories" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "colors" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "createdAt" SET DEFAULT '2023-11-05 17:13:55.588179'`);
        await queryRunner.query(`DROP TABLE "smart_phone"`);
    }

}
