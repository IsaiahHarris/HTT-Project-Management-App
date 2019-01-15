const bookshelf = require('./bookshelf');

class Spool_Piece extends bookshelf.Model {
  get tableName() {
    return 'spool_pieces';
  }

  get hasTimestamps() {
    return true;
  }

  projects() {
    return this.belongsTo('Project', 'spool_piece_id');
  }
}

module.exports = bookshelf.model('Spool_Piece', Spool_Piece);
