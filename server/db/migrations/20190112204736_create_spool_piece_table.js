exports.up = function(knex, Promise) {
  return knex.schema.createTable('spool_piece', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('note');
    table.boolean('requires_pt');
    table.booelan('requires_xray');
    table
      .integer('project_id')
      .references('projects.id')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spool_piece');
};
