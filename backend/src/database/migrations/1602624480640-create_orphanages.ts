import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602624480640 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		/* Realiza alterações dentro do banco de dados 
				- Cria tabelas
				- Cria campo
				- Deleta campo
				- etc
		*/
		await queryRunner.createTable(new Table({
			name: 'orphanages',
			columns: [
				{
				name: 'id',
				type: 'integer',
				unsigned: true, // Número não pode ser negativo
				isPrimary: true, // Chave identificadora, a chave única capaz de identificar algo, como usuários
				isGenerated: true,
				generationStrategy: 'increment' // Auto increment, sempre será o maior valor + 1
			},
			{
				name: 'name',
				type: 'varchar'
			},
			{
				name: 'opening_hours',
				type: 'varchar'
			},
			{
				name: 'latitude',
				type: 'decimal', // Float
				precision: 2, // Números antes da vírgula
				scale: 10 // Números depois da vírgula
			},
			{
				name: 'longitude',
				type: 'decimal', // Float
				precision: 2, // Números antes da vírgula
				scale: 10 // Números depois da vírgula
			}, 
			{
				name: 'about',
				type: 'text'
			},
			{
				name: 'instructions',
				type: 'text'
			},
			{
				name: 'open_on_weekends',
				type: 'boolean',
				default: false
			}
		],
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		/* Desfaz o que foi feito no up, é como um backup. */
		await queryRunner.dropTable('orphanages');
	}

}
