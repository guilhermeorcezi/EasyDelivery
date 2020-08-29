import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import servicesSeed from '../seeds/services.seed';

export default class createSeedServices1598733613109
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('Service').save(servicesSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
