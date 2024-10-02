var express = require("express");
var router = express.Router();

const { Client } = require("../utils/getClient");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({msg: "Hello"}).status(200);
});

router.get("/health", async (req, res) => {
  let dbStatus = false;
  console.log("Testing database connection");
  await Client().then(() => {
    console.log("Connected");
    dbStatus = true;
    // client.end();
  }).catch(e => {
    console.log("Failed to connect");
    console.log(e);
    dbStatus = false;
  });
  console.log(`Database status is ${dbStatus}`);
  res.send({
    server: true,
    database: dbStatus
  }).status(200);
});

module.exports = router;
