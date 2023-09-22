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
// wat
module.exports = { createGenreIngredient };
