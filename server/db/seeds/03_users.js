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
          image_url: 'https://imgur.com/K3K7S7R.png',
          project_id: 1,
          first_name: 'Shad',
          last_name: 'Lagrimas'
        },
        {
          id: 2,
          username: 'ben',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/0tysaFA.png',
          project_id: 1,
          first_name: 'Ben',
          last_name: 'Brandt'
        },
        {
          id: 3,
          username: 'isaiah',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/yyyVZFW.png',
          project_id: 1,
          first_name: 'Isaiah',
          last_name: 'Harris'
        },
        {
          id: 4,
          username: 'ben1',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/0tysaFA.png',
          project_id: 1,
          first_name: 'Ben',
          last_name: 'Brandt 1'
        },
        {
          id: 5,
          username: 'isaiah1',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/yyyVZFW.png',
          project_id: 1,
          first_name: 'Isaiah',
          last_name: 'Harris 1'
        },
        {
          id: 6,
          username: 'shad1',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/K3K7S7R.png',
          project_id: 1,
          first_name: 'Shad',
          last_name: 'Lagrimas 1'
        },
        {
          id: 7,
          username: 'isaiah2',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/yyyVZFW.png',
          project_id: 1,
          first_name: 'Isaiah',
          last_name: 'Harris 2'
        },
        {
          id: 8,
          username: 'shad2',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/K3K7S7R.png',
          project_id: 1,
          first_name: 'Shad',
          last_name: 'Lagrimas 2'
        },
        {
          id: 9,
          username: 'ben2',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/0tysaFA.png',
          project_id: 1,
          first_name: 'Ben',
          last_name: 'Brandt 2'
        },
        {
          id: 10,
          username: 'shad3',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/K3K7S7R.png',
          project_id: 1,
          first_name: 'Shad',
          last_name: 'Lagrimas 3'
        },
        {
          id: 11,
          username: 'ben3',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/0tysaFA.png',
          project_id: 1,
          first_name: 'Ben',
          last_name: 'Brandt 3'
        },
        {
          id: 12,
          username: 'isaiah3',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/yyyVZFW.png',
          project_id: 1,
          first_name: 'Isaiah',
          last_name: 'Harris 3'
        },
        {
          id: 13,
          username: 'ben4',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/0tysaFA.png',
          project_id: 1,
          first_name: 'Ben',
          last_name: 'Brandt 4'
        },
        {
          id: 14,
          username: 'isaiah4',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/yyyVZFW.png',
          project_id: 1,
          first_name: 'Isaiah',
          last_name: 'Harris 4'
        },
        {
          id: 15,
          username: 'shad4',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/K3K7S7R.png',
          project_id: 1,
          first_name: 'Shad',
          last_name: 'Lagrimas 4'
        },
        {
          id: 16,
          username: 'isaiah5',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/yyyVZFW.png',
          project_id: 1,
          first_name: 'Isaiah',
          last_name: 'Harris 5'
        },
        {
          id: 17,
          username: 'shad5',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/K3K7S7R.png',
          project_id: 1,
          first_name: 'Shad',
          last_name: 'Lagrimas 5'
        },
        {
          id: 18,
          username: 'ben5',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/0tysaFA.png',
          project_id: 1,
          first_name: 'Ben',
          last_name: 'Brandt 5'
        },
        {
          id: 19,
          username: 'shad6',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/K3K7S7R.png',
          project_id: 1,
          first_name: 'Shad',
          last_name: 'Lagrimas 6'
        },
        {
          id: 20,
          username: 'ben6',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/0tysaFA.png',
          project_id: 1,
          first_name: 'Ben',
          last_name: 'Brandt 6'
        },
        {
          id: 21,
          username: 'isaiah6',
          password:
            '$2b$12$HueRLBiASdSjLQA.EC9P6O3NeA0OTAGCl/22O.t2axPDe.oZPOJTO',
          image_url: 'https://imgur.com/yyyVZFW.png',
          project_id: 1,
          first_name: 'Isaiah',
          last_name: 'Harris 6'
        }
      ]);
    });
};
