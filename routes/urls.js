var express = require('express');
var router = express.Router();

const { AllRoutes } = require('../utils/read-all-routes');
const upserter = require('../utils/upsert-route');

router.get('/', async (req, res) => {

  const routes = AllRoutes.AllRoutes();
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
