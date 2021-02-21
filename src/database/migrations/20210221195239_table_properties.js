
exports.up = function(knex) {
	return knex.schema.createTable("properties", function (table) {
		table.increments("id").primary();
		table.boolean("isHouse").notNullable();
		table.string("street", 50).notNullable();
		table.string("neighbourhood", 50).notNullable();
		table.string("city", 30).notNullable();
		table.string("cep", 30).notNullable();
		table.float("rent").notNullable();
		table.integer("room").notNullable();
    table.integer("suite").notNullable();
    table.integer("livingRoom").notNullable();
    table.integer("diningRoom");
    table.integer("parking").notNullable();
    table.float("area").notNullable();
    table.boolean("includesWardrobe").notNullable();
    table.string("description",200).notNullable();
    table.integer("floor");
    table.float("condoFee");
    table.boolean("doorman24h");
		table.timestamps(true, true);
	});
  
};

exports.down = function(knex) {
	return knex.schema.dropTable("properties");  
};