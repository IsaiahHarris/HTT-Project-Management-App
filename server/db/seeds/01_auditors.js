exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('auditors')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('auditors').insert([
        {
          id: 1,
          username: 'admin',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/a/CO3gm7b'
        }
      ]);
    });
};
