exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spool_pieces')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('spool_pieces').insert([
        {
          id: 1,
          title: 'Spool Piece 1',
          note: 'Needs X-Ray',
          requires_pt: 'false',
          requires_xray: 'true',
          image_url: 'https://imgur.com/a/KOAhiD5',
          project_id: 1
        },
        {
          id: 2,
          title: 'Spool Piece 2',
          note: 'Needs Penetrant Testing',
          requires_pt: 'true',
          requires_xray: 'false',
          image_url: 'https://imgur.com/a/HU8iXrB',
          project_id: 1
        },
        {
          id: 3,
          title: 'Spool Piece 3',
          note: 'Needs X-Ray',
          requires_pt: 'false',
          requires_xray: 'true',
          image_url: 'https://imgur.com/a/KOAhiD5',
          project_id: 1
        },
        {
          id: 4,
          title: 'Spool Piece 4',
          note: '',
          requires_pt: 'false',
          requires_xray: 'false',
          image_url: 'https://imgur.com/a/wJ6dOnv',
          project_id: 1
        }
      ]);
    });
};
