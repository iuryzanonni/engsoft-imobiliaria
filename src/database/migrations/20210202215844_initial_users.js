
exports.up = function(knex) {
  return knex.schema.createTable("Users", function (table) {
		table.increments("Id").primary();
		table.string("Name", 30).notNullable;
		table.string("Last_Name", 30).notNullable;
		table.string("Email", 30).notNullable();
		table.string("Password", 30).notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
    return knex.schema.dropTable("Users");
};
