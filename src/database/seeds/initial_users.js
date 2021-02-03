
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {
          Id: 1,
          Name: "Leonardo",
          Last_Name: 'Leite',
          Email: 'leonardo@email.com',
          Password: 'leo123'
        },
        {
          Id: 2,
          Name: "Lucca",
          Last_Name: 'Miranda',
          Email: 'lucca@email.com',
          Password: 'lucca123'
        },
        {
          Id: 3,
          Name: "Savio",
          Last_Name: 'Cabral',
          Email: 'savio@email.com',
          Password: 'savio123'
        },
        {
          Id: 4,
          Name: "Iury",
          Last_Name: 'Zanonni',
          Email: 'iury@email.com',
          Password: 'iury'
        }
      ]);
    });
};
