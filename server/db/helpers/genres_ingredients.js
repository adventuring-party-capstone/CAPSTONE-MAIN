const client = require("../client");

const createGenreIngredient = async ({ genres_id, ingredients_id }) => {
	try {
		const {
			rows: [genre_ingredient],
		} = await client.query(
			`INSERT INTO genres_ingredients( genres_id, ingredients_id)
                VALUES ($1, $2)
                RETURNING *;
                `,
			[genres_id, ingredients_id]
		);
		return genre_ingredient;
	} catch (error) {
		throw error;
	}
};

const getAllGenresIngredients = async () => {
	try {
		console.log("entering get all genres ingredients");
		const { rows } = await client.query(
			`
            SELECT *
            FROM genres_ingredients;
            `
		);
		console.log("genres ingredients in get all genres ingredients", rows);
		return rows;
	} catch (error) {
		throw error;
	}
};
module.exports = { createGenreIngredient, getAllGenresIngredients };
