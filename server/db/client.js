// this file establishes the connection to the database

const { Client } = require("pg");

// establish connection to database like with http://

const studio = "studiodrink";
const client = new Client(`postgres://localhost:5432/${studio}`);

// export for use in other files
module.exports = client;
