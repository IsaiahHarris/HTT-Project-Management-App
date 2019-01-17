exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spool_pieces')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('spool_pieces').insert([
        {
          id: 1,
          title: 'spool piece 1',
          note: 'Needs X-Ray',
          requires_pt: 'false',
          requires_xray: 'true',
          image_url: 'http://ceresist.com/wp-content/uploads/P9040046.jpg',
          project_id: 1
        },
        {
          id: 2,
          title: 'spool piece 2',
          note: 'Needs Penetrant Testing',
          requires_pt: 'true',
          requires_xray: 'false',
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnm9_q-jllkU7og0yBont_TQu_q2L0sRzxGEepDxuYFB93gQe0VQ',
          project_id: 1
        },
        {
          id: 3,
          title: 'spool piece 3',
          note: 'Needs X-Ray',
          requires_pt: 'false',
          requires_xray: 'true',
          image_url: 'http://ceresist.com/wp-content/uploads/P9040046.jpg',
          project_id: 1
        },
        {
          id: 4,
          title: 'spool piece 4',
          note: '',
          requires_pt: 'false',
          requires_xray: 'false',
          image_url: 'https://pbs.twimg.com/media/DmfahyEXgAA3Y2S.jpg',
          project_id: 1
        }
      ]);
    });
};
