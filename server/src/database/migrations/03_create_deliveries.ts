import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('deliveries', (table) => {
		table.increments('id').primary();

		table.string('description').notNullable();

		table
			.integer('user_id') 
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
		table
			.integer('motoboy_id') 
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
		table
			.integer('service_id') 
			.notNullable()
			.references('id')
			.inTable('services')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropSchema('deliveries');
}
