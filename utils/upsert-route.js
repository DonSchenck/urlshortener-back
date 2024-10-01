const { Client } = require('./getClient');

module.exports.upsertRoute = async(route, url) => {
  const client = await Client();
  let insertRow = await client.query('INSERT INTO routes(route, url) VALUES($1,$2);', [`${route}`,`${url}`]);
  console.log(`Inserted ${insertRow.rowCount} row`);
  await client.end();
};