const client = require("../client");

const createGenre = async ({ genres_name }) => {
     try {
          const {
               rows: [genre],
          } = await client.query(
               `INSERT INTO genres( genres_name)
                VALUES ($1)
                RETURNING *;
                `,
               [genres_name]
          );
          return genre;
     } catch (error) {
          throw error;
     }
};

module.exports = { createGenre };
