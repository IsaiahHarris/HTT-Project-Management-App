const bookshelf = require('./bookshelf');

class Auditor extends bookshelf.Model {
  get tableName() {
    return 'users';
  }

  get hasTimestamps() {
    return true;
  }

  projects() {
    return this.hasMany('Project', 'auditor_id');
  }
}

module.exports = bookshelf.model('Auditor', Auditor);
