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

module.exports = { createUserDrink };
