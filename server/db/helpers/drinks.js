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
		console.log("entering get all drinks");
		const { rows } = await client.query(
			`
            SELECT *
            FROM drinks;
            `
		);
		console.log("drinks in get all", rows);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getDrinkById = async (drink_id) => {
	try {
		console.log("entering drink by id");
		const { rows: [drink] } = await client.query(`
		SELECT * FROM drinks
		WHERE drinks_id = ${drink_id}`
		);
		console.log("drink in get drink by id", drink)
		return drink;
	} catch (error) {
		throw error;
	}
};

module.exports = { createDrink, getAllDrinks, getDrinkById };
