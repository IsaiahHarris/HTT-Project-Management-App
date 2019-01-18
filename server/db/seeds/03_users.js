exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'shad',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/a/CO3gm7b',
          project_id: 1
        },
        {
          id: 2,
          username: 'ben',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/a/9XNUBDX',
          project_id: 1
        }
      ]);
    });
};
