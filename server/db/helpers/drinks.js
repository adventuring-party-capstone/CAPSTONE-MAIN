const client = require('../client');

const createDrink = async ({ drinks_id, cocktails_db_drinks_id, drinks_name, ingredients, recipe, image, glass, alcoholic}) => {
    try {
        const {
            rows: [drink] 
        } = await client.query(
            `INSERT INTO drinks(drinks_id, cocktails_db_drinks_id, drinks_name, ingredients, recipe, image, glass, alcoholic)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
            RETURNING *;
            `,
            [drinks_id, cocktails_db_drinks_id, drinks_name, ingredients, recipe, image, glass, alcoholic]
        );
        return drink;
    } catch (error) {
        throw error;
    }
}

module.exports = {createDrink}