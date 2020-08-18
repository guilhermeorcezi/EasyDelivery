import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary();

		table.string('name').notNullable();
		table.string('email').notNullable();
		table.string('password').notNullable();
		table.string('whatsapp').notNullable().unique();
		table.string('avatar').notNullable();
		table.boolean('is_motoboy').notNullable();
		table.string('uf').notNullable();
		table.string('city').notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropSchema('users');
}
