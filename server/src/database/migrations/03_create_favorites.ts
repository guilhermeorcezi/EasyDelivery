import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('favorites', (table) => {
		table.increments('id').primary();

		table
			.integer('user_id_logged')
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');

		table
			.integer('user_id_favorited')
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropSchema('favorites');
}
