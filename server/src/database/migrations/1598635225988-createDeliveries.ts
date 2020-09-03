import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class createDeliveries1598635225988
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'deliveries',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'service_id',
            type: 'uuid',
          },
          {
            name: 'deliveryman_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'deliveries',
      new TableForeignKey({
        name: 'DeliveryUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'deliveries',
      new TableForeignKey({
        name: 'DeliverymanId',
        columnNames: ['deliveryman_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'deliveries',
      new TableForeignKey({
        name: 'DeliveryService',
        columnNames: ['service_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'services',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('deliveries', 'DeliveryUser');
    await queryRunner.dropForeignKey('deliveries', 'DeliverymanId');
    await queryRunner.dropForeignKey('deliveries', 'DeliveryService');

    await queryRunner.dropTable('deliveries');
  }
}
