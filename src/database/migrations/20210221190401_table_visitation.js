
exports.up = function(knex) {
	return knex.schema.createTable("Visitation", function (table) {
		table.increments("id").primary();
		table.date("dateVisit").notNullable();
		table.integer("realEstate").notNullable();
		table.time("hourVisit").notNullable();
		table.string("name").notNullable();
		table.string("cpf").notNullable();
		table.timestamps(true, true);
	});
  
};

exports.down = function(knex) {
	return knex.schema.dropTable("Visitation");  
};