const bookshelf = require('./bookshelf');

class Project extends bookshelf.Model {
  get tableName() {
    return 'projects';
  }

  get hasTimestamps() {
    return true;
  }

  projects() {
    return this.belongsTo('Auditor', 'auditors_id');
  }

  spool_pieces() {
    return this.hasMany('Spool', 'spool_piece_id');
  }
}

module.exports = bookshelf.model('Project', Project);
