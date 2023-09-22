const client = require("../client");

const createDrink = async ({
	cocktails_db_drinks_id,
	drinks_name,
	ingredients,
	recipe,
	image,
	glass,
	alcoholic,
}) => {
	try {
		const {
			rows: [drink],
		} = await client.query(
			`INSERT INTO drinks(cocktails_db_drinks_id, drinks_name, ingredients, recipe, image, glass, alcoholic)
            VALUES ($1,$2,$3,$4,$5,$6,$7)
            RETURNING *;
            `,
			[
				cocktails_db_drinks_id,
				drinks_name,
				ingredients,
				recipe,
				image,
				glass,
				alcoholic,
			]
		);
		return drink;
	} catch (error) {
		throw error;
	}
};

const getAllDrinks = async () => {
	try {
		const { drinks } = await client.query(
			`
            SELECT *
            FROM drinks;
            `
		);
		return drinks;
	} catch (error) {
		throw error;
	}
};

module.exports = { createDrink, getAllDrinks };
