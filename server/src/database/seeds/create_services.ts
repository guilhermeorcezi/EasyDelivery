import Knex from 'knex';

export async function seed(knex: Knex) {
	await knex('services').insert([
		{ name: 'Mercado' },
		{ name: 'Farmácia' },
		{ name: 'Floricultura' },
		{ name: 'Perfumaria' },
		{ name: 'Petshop' },
	]);
}
