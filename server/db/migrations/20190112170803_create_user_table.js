exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('username')
      .unique()
      .notNullable();
    table.string('password').notNullable();
    table
      .integer('project_id')
      .references('projects.id')
      .notNullable();
    table.string('image_url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
