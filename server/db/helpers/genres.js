const client = require("../client");

const createGenre = async ({ genres_name }) => {
     try {
          const {
               rows: [genre],
          } = await client.query(
               `INSERT INTO genres( genres_name)
                VALUES ($1)
                RETURNING *;
                `,
               [genres_name]
          );
          return genre;
     } catch (error) {
          throw error;
     }
};

const getAllGenres = async () => {
	try {
		console.log("entering get all genres");
		const { rows } = await client.query(
			`
            SELECT *
            FROM genres;
            `
		);
		console.log("genres in get all", rows);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getGenreById = async (genre_id) => {
	try {
		console.log("entering genre by id");
		const { rows: [genre] } = await client.query(`
		SELECT * FROM genres
		WHERE genres_id = ${genre_id}`
		);
		console.log("genre in get genre by id", genre)
		return genre;
	} catch (error) {
		throw error;
	}
}

module.exports = { createGenre, getAllGenres, getGenreById };
