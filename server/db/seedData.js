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
		drink_name: "Apple Karate",
		ingredients: "Apple juice",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: false,
	},
	{
		drinks_id: 2,
		cocktails_db_drinks_id: 12668,
		drink_name: "Egg cream",
		ingredients: "Milk",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: false,
	},
	{
		drinks_id: 3,
		cocktails_db_drinks_id: 12748,
		drink_name: "Orange Scented Hot Chocolate",
		ingredients: "Milk",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: false,
	},
	{
		drinks_id: 4,
		cocktails_db_drinks_id: 12780,
		drink_name: "Spiking coffee",
		ingredients: "Coffee",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: false,
	},
	{
		drinks_id: 5,
		cocktails_db_drinks_id: 12784,
		drink_name: "Thai Iced Coffee",
		ingredients: "Coffee",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: false,
	},
	{
		drinks_id: 6,
		cocktails_db_drinks_id: 16958,
		drink_name: "Apple Pie with A Crust",
		ingredients: "Rum",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: true,
	},
	{
		drinks_id: 7,
		cocktails_db_drinks_id: 15597,
		drink_name: "Absolut Stress #2",
		ingredients: "Vodka",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: true,
	},
	{
		drinks_id: 8,
		cocktails_db_drinks_id: 17226,
		drink_name: "Adam & Eve",
		ingredients: "Vodka",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: true,
	},
	{
		drinks_id: 9,
		cocktails_db_drinks_id: 11050,
		drink_name: "Apricot Lady",
		ingredients: "Rum",
		recipe: "",
		image: "",
		glass: "",
		alcoholic: true,
	},
	{
		drinks_id: 10,
		cocktails_db_drinks_id: 178325,
		drink_name: "Aperol Spritz",
		ingredients: "Prosecco",
		recipe: "",
		image: "",
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
		genres_name: "Dance pop",
	},
	{
		genres_id: 10,
		genres_name: "Alternative Rock",
	},
];

//Users drinks favorites
const users_drinks_favorites = [
	{
		users_drinks_id: 1,
		users_id: 1,
		drinks_id: 1,
	},
	{
		users_drinks_id: 2,
		users_id: 2,
		drinks_id: 2,
	},
	{
		users_drinks_id: 3,
		users_id: 3,
		drinks_id: 3,
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
		cocktails_db_ingredients_id: 308,
		ingredients_name: "Lime juice",
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
		genres_id: 2,
		ingredients_id: 2,
	},
	{
		genres_ingredients_id: 3,
		genres_id: 3,
		ingredients_id: 3,
	},
	{
		genres_ingredients_id: 4,
		genres_id: 4,
		ingredients_id: 4,
	},
	{
		genres_ingredients_id: 5,
		genres_id: 5,
		ingredients_id: 5,
	},
	{
		genres_ingredients_id: 6,
		genres_id: 6,
		ingredients_id: 6,
	},
	{
		genres_ingredients_id: 7,
		genres_id: 7,
		ingredients_id: 7,
	},
	{
		genres_ingredients_id: 8,
		genres_id: 8,
		ingredients_id: 8,
	},
	{
		genres_ingredients_id: 9,
		genres_id: 9,
		ingredients_id: 9,
	},
	{
		genres_ingredients_id: 10,
		genres_id: 10,
		ingredients_id: 10,
	},
];
