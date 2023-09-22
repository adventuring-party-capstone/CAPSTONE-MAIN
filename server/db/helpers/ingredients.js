const client = require("../client");

const createIngredient = async ({
  cocktails_db_ingredients_id,
  ingredients_name,
}) => {
  try {
    const {
      rows: [ingredient],
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
};

const getAllIngredients = async () => {
  try {
    console.log("entering get all ingredients");
    const { rows } = await client.query(
      `
            SELECT *
            FROM ingredients;
            `
    );
    console.log("ingredients in get all", rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getIngredientById = async (ingredient_id) => {
  try {
    console.log("entering ingredient by id");
    const {
      rows: [ingredient],
    } = await client.query(`
        SELECT * FROM ingredients
        WHERE ingredients_id = ${ingredient_id}
        `);
    console.log("ingredient in get ingredient by id", ingredient);
    return ingredient;
  } catch (error) {
    throw error;
  }
};
module.exports = { createIngredient, getAllIngredients, getIngredientById };
