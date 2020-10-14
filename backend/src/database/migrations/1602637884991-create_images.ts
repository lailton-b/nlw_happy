import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602637884991 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table ({
			name: 'images',
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
					name: 'path',
					type: 'varchar',
				},
				{
					name: 'orphanage_id',
					type: 'integer'
				}
			],
			foreignKeys: [
				{
					name: 'ImageOrphanage',
					columnNames: ['orphanage_id'],
					referencedTableName: 'orphanages',
					referencedColumnNames: ['id'],
					onUpdate: 'CASCADE', // Caso o ID do orfanato seja atualizado, também muda o das imagens.
					onDelete: 'CASCADE'
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('images');
	}

}
