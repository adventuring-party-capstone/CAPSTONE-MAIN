const client = require("../client");

const createDrink = async ({
     cocktails_db_drinks_id,
     drinks_name,
     ingredients,
     recipe,
     image,
     glass,
     alcoholic,
     users_id,
}) => {
     try {
          const {
               rows: [drink],
          } = await client.query(
               `INSERT INTO drinks(cocktails_db_drinks_id, drinks_name, ingredients, recipe, image, glass, alcoholic, users_id)
               VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
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
                    users_id,
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
          const {
               rows: [drink],
          } = await client.query(`
		SELECT * FROM drinks
		WHERE drinks_id = ${drink_id}`);
          console.log("drink in get drink by id", drink);
          return drink;
     } catch (error) {
          throw error;
     }
};

const getDrinksByAlcoholic = async (alcoholic) => {
     try {
          console.log("entering get drinks if alcoholic");
          const { rows } = await client.query(
               `SELECT * FROM drinks
			WHERE alcoholic = ${alcoholic}`
          );
          console.log("drinks in get drinks if alcoholic ", rows);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getDrinksByUserId = async (userId) => {
     try {
          console.log("entering get drinks by user Id");
          const { rows } = await client.query(
               `SELECT * FROM drinks
           WHERE users_id = ${userId}`
          );
          console.log("drinks in get drinks by user Id ", rows);
          return rows;
     } catch (error) {
          throw error;
     }
};

const deleteDrink = async (drinksId) => {
     try {
          console.log("entering db helper deleteDrink");
          const { rows } = await client.query(`
		DELETE FROM drinks WHERE drinks_id=${drinksId}
		RETURNING *;

		`);
     } catch (error) {
          throw error;
     }
};

module.exports = {
     createDrink,
     getAllDrinks,
     getDrinkById,
     getDrinksByAlcoholic,
     getDrinksByUserId,
     deleteDrink,
};
