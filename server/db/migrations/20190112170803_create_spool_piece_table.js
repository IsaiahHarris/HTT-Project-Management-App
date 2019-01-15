exports.up = function(knex, Promise) {
  return knex.schema.createTable('spool_pieces', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('note');
    table
      .string('requires_pt')
      .notNullable()
      .defaultTo('false');
    table
      .string('requires_xray')
      .notNullable()
      .defaultTo('false');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spool_pieces');
};
