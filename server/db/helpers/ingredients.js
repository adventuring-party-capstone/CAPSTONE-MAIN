const client = require('../client');

const createIngredient = async ({ cocktails_db_ingredients_id, ingredients_name}) => {
    try {
        const{
            rows: [ingredient]
        } = await client.query(
            `INSERT INTO ingredients (cocktails_db_ingredients_id, ingredients_name)
            VALUES ($1,$2)
            RETURNING *;
            `,
            [cocktails_db_ingredients_id, ingredients_name]
        );
        return ingredient;
    } catch (error) {
        throw error;
        
    }
}
module.exports = {createIngredient}