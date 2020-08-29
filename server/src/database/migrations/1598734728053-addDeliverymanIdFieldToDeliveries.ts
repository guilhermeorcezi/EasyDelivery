import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class addDeliverymanIdFieldToDeliveries1598734728053
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'deliveries',
      new TableColumn({
        name: 'deliveryman_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'deliveries',
      new TableForeignKey({
        name: 'ServiceDeliveryman',
        columnNames: ['deliveryman_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
