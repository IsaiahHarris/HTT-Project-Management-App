exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spool_pieces')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('spool_pieces').insert([
        {
          id: 1,
          title: 'spool_piece_01',
          note: 'Needs X-Ray',
          requires_pt: 'false',
          requires_xray: 'true'
        },
        {
          id: 2,
          title: 'spool_piece_02',
          note: 'Needs Penetrant Testing',
          requires_pt: 'true',
          requires_xray: 'false'
        },
        {
          id: 3,
          title: 'spool_piece_03',
          note: 'Needs X-Ray',
          requires_pt: 'false',
          requires_xray: 'true'
        },
        {
          id: 4,
          title: 'spool_piece_04',
          note: '',
          requires_pt: 'false',
          requires_xray: 'false'
        }
      ]);
    });
};
