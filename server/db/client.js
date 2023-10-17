// this file establishes the connection to the database

const { Client } = require("pg");

// establish connection to database like with http://

// const studio = "studiodrink";
// const client = new Client(`postgres://localhost:5432/${studio}`);

const client = new Client(
	`postgres://studiodrinkwestdb_user:Nf9AX3FNjnFPtbgEZDYrueS4MV8IOKqb@dpg-ckmm6f2v7m0s73b0u2s0-a/studiodrinkwestdb`
);

// export for use in other files
module.exports = client;
