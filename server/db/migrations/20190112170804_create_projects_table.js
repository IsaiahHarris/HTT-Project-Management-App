exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('title');
    table.string('image_url');
    table
      .integer('auditor_id')
      .references('auditors.id')
      .notNullable();
    table
      .integer('user_id')
      .references('users.id')
      .notNullable();
    table
      .integer('spool_piece_id')
      .references('spool_pieces.id')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};