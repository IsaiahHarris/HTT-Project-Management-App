const bookshelf = require('./bookshelf');

class Project extends bookshelf.Model {
  get tableName() {
    return 'projects';
  }

  get hasTimestamps() {
    return true;
  }

  projects() {
    return this.belongsTo('Project', 'auditor_id');
  }
}

module.exports = bookshelf.model('Project', Project);
