//seedData for Users

const users = [
     { users_id: 1, username: "Asteria", password: "cuteness" },
     { users_id: 2, username: "Yuki", password: "iAmSmol" },
     { users_id: 3, username: "Nacho", password: "iAmBig" },
];

//Drinks
const drinks = [
     {
          drinks_id: 1,
          cocktails_db_drinks_id: null,
          drinks_name: "Tuna Drink",
          ingredients: "Tuna",
          recipe: "Pour tuna water out",
          image: "data:image/jpeg;base64,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",
          glass: "Smol glass",
          alcoholic: false,
     }
];

//Genres
const genres = [
     {
          genres_id: 1,
          genres_name: "R&B",
     },
     {
          genres_id: 2,
          genres_name: "Jazz",
     },
     {
          genres_id: 3,
          genres_name: "Pop",
     },
     {
          genres_id: 4,
          genres_name: "Rock",
     },
     {
          genres_id: 5,
          genres_name: "EDM",
     },
     {
          genres_id: 6,
          genres_name: "Hip Hop",
     },
     {
          genres_id: 7,
          genres_name: "Classical",
     },
     {
          genres_id: 8,
          genres_name: "Kpop",
     },
     {
          genres_id: 9,
          genres_name: "Soundtrack",
     },
     {
          genres_id: 10,
          genres_name: "Alternative Rock",
     },
];

//Users drinks
const users_drinks = [
     {
          users_drinks_id: 1,
          users_id: 1,
          drinks_id: 1,
          api_drinks_id: null,
     },
     {
          users_drinks_id: 2,
          users_id: 2,
          drinks_id: 1,
          api_drinks_id: null,
     },
     {
          users_drinks_id: 3,
          users_id: 3,
          drinks_id: 1,
          api_drinks_id: null,
     },
];

// ingredients id
const ingredients = [
     {
          ingredients_id: 1,
          cocktails_db_ingredients_id: 141,
          ingredients_name: "Cognac",
     },
     {
          ingredients_id: 2,
          cocktails_db_ingredients_id: 139,
          ingredients_name: "Coffee",
     },
     {
          ingredients_id: 3,
          cocktails_db_ingredients_id: 1,
          ingredients_name: "Vodka",
     },
     {
          ingredients_id: 4,
          cocktails_db_ingredients_id: 71,
          ingredients_name: "Bourbon",
     },
     {
          ingredients_id: 5,
          cocktails_db_ingredients_id: 333,
          ingredients_name: "Milk",
     },
     {
          ingredients_id: 6,
          cocktails_db_ingredients_id: 4,
          ingredients_name: "Tequila",
     },
     {
          ingredients_id: 7,
          cocktails_db_ingredients_id: 542,
          ingredients_name: "Prosecco",
     },
     {
          ingredients_id: 8,
          cocktails_db_ingredients_id: 513,
          ingredients_name: "Water",
     },
     {
          ingredients_id: 9,
          cocktails_db_ingredients_id: 3,
          ingredients_name: "Rum",
     },
     {
          ingredients_id: 10,
          cocktails_db_ingredients_id: 28,
          ingredients_name: "Apple juice",
     },
     {
          ingredients_id: 11,
          cocktails_db_ingredients_id: 476,
          ingredients_name: "Sugar",
     },
     {
          ingredients_id: 12,
          cocktails_db_ingredients_id: 533,
          ingredients_name: "Yoghurt",
     },

     {
          ingredients_id: 13,
          cocktails_db_ingredients_id: 352,
          ingredients_name: "Orange juice",
     },
];

// Tying genres and ingredients
const genres_ingredients = [
     {
          genres_ingredients_id: 1,
          genres_id: 1,
          ingredients_id: 1,
     },
     {
          genres_ingredients_id: 2,
          genres_id: 1,
          ingredients_id: 11,
     },
     {
          genres_ingredients_id: 3,
          genres_id: 2,
          ingredients_id: 2,
     },
     {
          genres_ingredients_id: 4,
          genres_id: 3,
          ingredients_id: 3,
     },
     {
          genres_ingredients_id: 5,
          genres_id: 3,
          ingredients_id: 12,
     },
     {
          genres_ingredients_id: 6,
          genres_id: 4,
          ingredients_id: 4,
     },
     {
          genres_ingredients_id: 7,
          genres_id: 4,
          ingredients_id: 8,
     },
     {
          genres_ingredients_id: 8,
          genres_id: 5,
          ingredients_id: 5,
     },
     {
          genres_ingredients_id: 9,
          genres_id: 6,
          ingredients_id: 6,
     },
     {
          genres_ingredients_id: 10,
          genres_id: 6,
          ingredients_id: 11,
     },
     {
          genres_ingredients_id: 11,
          genres_id: 7,
          ingredients_id: 7,
     },
     {
          genres_ingredients_id: 12,
          genres_id: 7,
          ingredients_id: 11,
     },
     {
          genres_ingredients_id: 13,
          genres_id: 8,
          ingredients_id: 8,
     },
     {
          genres_ingredients_id: 14,
          genres_id: 9,
          ingredients_id: 9,
     },
     {
          genres_ingredients_id: 15,
          genres_id: 9,
          ingredients_id: 12,
     },
     {
          genres_ingredients_id: 16,
          genres_id: 10,
          ingredients_id: 10,
     },
];

module.exports = {
     users,
     drinks,
     genres,
     users_drinks,
     ingredients,
     genres_ingredients,
};
