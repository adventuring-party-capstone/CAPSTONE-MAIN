const client = require("../client");

const createUserDrink = async ({ users_id, drinks_id }) => {
	try {
		const {
			rows: [user_drink],
		} = await client.query(
			`INSERT INTO users_drinks(users_id, drinks_id)
                VALUES ($1, $2)
                RETURNING *;
                `,
			[users_id, drinks_id]
		);
		return user_drink;
	} catch (error) {
		throw error;
	}
};

const getAllUsersDrinks = async () => {
	try {
		console.log("entering get all users drinks");
		const { rows } = await client.query(
			`
            SELECT *
            FROM users_drinks;
            `
		);
		console.log("users drinks in get all", rows);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getUsersDrinksByUserId = async (users_id) => {
	try {
		console.log("entering users favorite drinks by users id");
		const { rows } = await client.query(
			`
            SELECT * FROM users_drinks 
            WHERE users_id = ${users_id}
            `
		);
		console.log("users favorites in get users_id", rows);
		return rows;
	} catch (error) {
		throw error;
	}
};

const deleteUserDrink = async (users_drinks_id) => {
	try {
		console.log( "deleting users drinks by users drinks id")
		const {rows} = await client.query(
			`
			DELETE FROM users_drinks
			WHERE users_drinks_id = ${users_drinks_id}
			RETURNING *;
			`
		)
		console.log("Delete successful")
	} catch (error) {
		throw error;
	}
};

module.exports = { createUserDrink, getAllUsersDrinks, getUsersDrinksByUserId, deleteUserDrink };
