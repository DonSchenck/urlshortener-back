const { getClient } = require("./getClient");

module.exports.getAllRoutes = async() => {
  const client = await getClient();
  const allroutes = await client.query('SELECT route, url FROM routes ORDER BY route');
  console.log("Getting all routes...");
  console.log(allroutes);
  return JSON.stringify(allroutes);
  await client.end();
};
