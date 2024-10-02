const { Client } = require('./getClient');

module.exports.upsertRoute = async(route, url) => {
  const client = await Client();
  let upsertCmd = 'INSERT INTO routes (route, url) VALUES ($1,$2) ON CONFLICT (route) DO UPDATE SET url = $3, [`${route}`,`${url}`,`${url}`]';

  console.log("upsertCmd: " + upsertCmd);

  let insertRow = await client.query(upsertCmd);
  console.log(`Upserted ${insertRow.rowCount} row`);
  await client.end();
};