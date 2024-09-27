const { DB_USER, DB_PASSWORD, DB_SERVER } = process.env;
const DB = "urls";
const DB_TABLE = "routes";

function getDBUser() {
  return DB_USER;
}

function getDBPassword() {
  return DB_PASSWORD;
}

function getDBServer() {
  return DB_SERVER;
}

function getDB() {
  return DB;
}

function getDBTable() {
  return DB_TABLE;
}

module.exports = {
  getDB,
  getDBUser,
  getDBPassword,
  getDBServer,
  getDBTable
}