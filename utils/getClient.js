const { Client } = require('pg');
const DB = require("../utils/postgresConn").getDB();
const DB_TABLE = require("../utils/postgresConn").getDBTable;
const DB_PASSWORD = require("../utils/postgresConn").getDBPassword;
const DB_SERVER = require("../utils/postgresConn").getDBServer;
const DB_USER = require("../utils/postgresConn").getDBUser;

module.exports.getClient = async () => {
    const client = new Client({
        user: DB_USER,
        host: DB_SERVER,
        database: DB,
        password: DB_PASSWORD,
        port: 5432, // default port for PostgreSQL
    });
    await client.connect();
    return client;
};