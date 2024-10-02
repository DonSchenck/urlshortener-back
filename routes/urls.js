var express = require('express');
var router = express.Router();

const { Client } = require('../utils/getClient');
const upserter = require('../utils/upsert-route');

router.get('/', async (req, res) => {

  const routes = getRows();
  res.send(routes.rows).status(200);;
});

router.post("/", async (req, res) => {
  let document = {
    route: req.body.route,
    url: req.body.url
  };
  console.log("Adding document to DB", document);
  const result = upserter.upsertRoute(document.route, document.url);
  console.log(result);
  res.send(result).status(200);
});

module.exports = router;

// Function to get rows
async function getRows() {
  const client = await Client.connect();
  try {
    const res = await client.query(`SELECT route, url FROM routes ORDER BY route`);
    return res.rows; // returns an array of rows
  } catch (err) {
    console.error('Error executing query', err.stack);
  } finally {
    client.release();
  }
}