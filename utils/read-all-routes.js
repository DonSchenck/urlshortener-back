const { Client } = require("./getClient");

module.exports.getAllRoutes = async() => {
  const client = await Client();
  const allroutes = await client.query('SELECT route, url FROM routes ORDER BY route');
  console.log("Getting all routes...");
  console.log(allroutes.rows);
  await client.end();
  return allroutes.rows;
};
