const { Client } = require('./getClient');

module.exports.upsertRoute = async(route, url) => {
  const client = await Client();
  var upsertCmd = `INSERT INTO routes (route, url)
                   VALUES ($1,$2)
                   ON CONFLICT (route)
                   UPDATE SET url = $2,` [`${route}`,`${url}`];

//  let insertRow = await client.query('INSERT INTO routes(route, url) VALUES($1,$2);', [`${route}`,`${url}`]);
let insertRow = await client.query(upsertCmd);
console.log(`Upserted ${insertRow.rowCount} row`);
  await client.end();
};