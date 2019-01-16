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

  userProjects() {
    return this.belongsTo('User', 'user_id');
  }

  spoolPieces() {
    return this.hasMany('Spool_Piece', 'project_id');
  }
}

module.exports = bookshelf.model('Project', Project);
