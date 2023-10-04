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
          cocktails_db_drinks_id: 12564,
          drinks_name: "Apple Karate",
          ingredients: "Apple juice",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
          glass: "",
          alcoholic: false,
     },
     {
          drinks_id: 2,
          cocktails_db_drinks_id: 12668,
          drinks_name: "Egg cream",
          ingredients: "Milk",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg",
          glass: "",
          alcoholic: false,
     },
     {
          drinks_id: 3,
          cocktails_db_drinks_id: 12748,
          drinks_name: "Orange Scented Hot Chocolate",
          ingredients: "Milk",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
          glass: "",
          alcoholic: false,
     },
     {
          drinks_id: 4,
          cocktails_db_drinks_id: 12780,
          drinks_name: "Spiking coffee",
          ingredients: "Coffee",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg",
          glass: "",
          alcoholic: false,
     },
     {
          drinks_id: 5,
          cocktails_db_drinks_id: 12784,
          drinks_name: "Thai Iced Coffee",
          ingredients: "Coffee",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
          glass: "",
          alcoholic: false,
     },
     {
          drinks_id: 6,
          cocktails_db_drinks_id: 16958,
          drinks_name: "Apple Pie with A Crust",
          ingredients: "Rum",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/qspqxt1472720078.jpg",
          glass: "",
          alcoholic: true,
     },
     {
          drinks_id: 7,
          cocktails_db_drinks_id: 15597,
          drinks_name: "Absolut Stress #2",
          ingredients: "Vodka",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/xuyqrw1472811825.jpg",
          glass: "",
          alcoholic: true,
     },
     {
          drinks_id: 8,
          cocktails_db_drinks_id: 17226,
          drinks_name: "Adam & Eve",
          ingredients: "Vodka",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
          glass: "",
          alcoholic: true,
     },
     {
          drinks_id: 9,
          cocktails_db_drinks_id: 11050,
          drinks_name: "Apricot Lady",
          ingredients: "Rum",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/7ityp11582579598.jpg",
          glass: "",
          alcoholic: true,
     },
     {
          drinks_id: 10,
          cocktails_db_drinks_id: 178325,
          drinks_name: "Aperol Spritz",
          ingredients: "Prosecco",
          recipe: "",
          image: "https://www.thecocktaildb.com/images/media/drink/iloasq1587661955.jpg",
          glass: "",
          alcoholic: true,
     },
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
          drinks_id: 2,
          api_drinks_id: null,
     },
     {
          users_drinks_id: 3,
          users_id: 3,
          drinks_id: 3,
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
