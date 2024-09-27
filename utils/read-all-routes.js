const { getClient } = require("./getClient");

module.exports.getAllRoutes = async() => {
  const client = await getClient();
  const allroutes = await client.query('SELECT route, url FROM routes ORDER BY route');
  console.log(Object.keys(entries.rows?.[0]).join('\t'));
  console.log(`${entries.rows.map((r) => Object.values(r).join('\t')).join('\n')}`);
  await client.end();
};
