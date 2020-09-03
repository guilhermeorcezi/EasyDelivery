import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import servicesSeed from '../seeds/services.seed';

export default class createSeedService1598737788315
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('Service').save(servicesSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
