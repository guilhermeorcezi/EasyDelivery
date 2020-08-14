import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('user_location', (table) => {
		table.increments('id').primary();

		table.string('uf').notNullable();
		table.string('city').notNullable();

		table
			.integer('user_id')
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropSchema('user_location');
}
