// this file establishes the connection to the database

const { Client } = require("pg");

// establish connection to database like with http://

// const studio = "studiodrink";
// const client = new Client(`postgres://localhost:5432/${studio}`);
// `postgres://studiodrinkbeta2_user:bsNa8DiK8ToOFbEFe7I7g4Fwn5Dnhd0z@dpg-ckja99a12bvs7391712g-a/studiodrinkbeta2`
const client = new Client(
	`postgres://studiodrinkwestdb_user:Nf9AX3FNjnFPtbgEZDYrueS4MV8IOKqb@dpg-ckmm6f2v7m0s73b0u2s0-a/studiodrinkwestdb`
);

// export for use in other files
module.exports = client;
