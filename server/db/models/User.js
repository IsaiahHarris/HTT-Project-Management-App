const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }

  get hasTimestamps() {
    return true;
  }

  projects() {
    return this.belongsTo('Project', 'project_id');
  }
}

module.exports = bookshelf.model('User', User);
