const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }

  get hasTimestamps() {
    return true;
  }

  projects() {
    return this.hasMany('Project', 'user_id');
  }
}

module.exports = bookshelf.model('User', User);
