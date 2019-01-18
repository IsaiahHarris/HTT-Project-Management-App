exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          title: 'Campbell Industrial New Plant',
          image_url:
            'https://media.bizj.us/view/img/1671291/par-petroleum122713*750xx600-338-0-23.jpg',
          auditor_id: 1
        }
      ]);
    });
};
