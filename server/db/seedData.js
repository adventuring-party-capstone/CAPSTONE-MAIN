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
		drinks_name: "Cranberry Mojito",
		ingredients: "Cranberry juice, rum, sugar, mint leaves",
		recipe: "Muddle mint leaves and sugar together in the bottom of a glass. Pour other ingredients; add ice and stir.",
		image: "https://homecookingmemories.com/wp-content/uploads/2019/12/Cranberry-Mojito-Recipe-27.jpg",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 2,
		cocktails_db_drinks_id: null,
		drinks_name: "Winnie's Margarita",
		ingredients:
			"2 ounces blanco tequila, 1/2 ounce orange liqueur, 1 ounce lime juice, freshly squeezed, 1/2 ounce agave syrup. Garnish: lime wheel, kosher salt (optional)",
		recipe: "Add tequila, orange liqueur, lime juice and agave syrup to a cocktail shaker filled with ice, and shake until well-chilled. Strain into a rocks glass over fresh ice. Garnish with a lime wheel and kosher salt rim (optional).",
		image: "https://www.liquor.com/thmb/TNSRmlPvZbRnLAxTTYHMtag0oo0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/margarita-720x720-primary-f4a3b044e9a746d9b88890515c3a7328.jpg",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 3,
		cocktails_db_drinks_id: null,
		drinks_name: "Tequila Sunset",
		ingredients:
			"2 ounces blanco tequila, 4 ounces orange juice, freshly squeezed 1/4 ounce grenadine. Garnish: orange slice, cherry",
		recipe: "Add the tequila and then the orange juice to a chilled highball glass filled with ice. Top with the grenadine, which will sink to the bottom of the glass, creating a layered effect. Garnish with an orange slice and a cherry.",
		image: "https://www.liquor.com/thmb/jjV_5roCvfnVgzYU89UROFguRpM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tequila-sunrise-1500x1500-hero-eeae10efeb134a3e9d5a3852b1b6e7dc.jpg",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 4,
		cocktails_db_drinks_id: null,
		drinks_name: "AB Cooler",
		ingredients:
			"vodka, grapefruit seltzer, lime, lemon, simple syrup, ice",
		recipe: "Juice the lemon and half the lime. Pour all of the liquids over ice. Slice the remaining lime and float in the drink.",
		image: "https://www.tablefortwoblog.com/wp-content/uploads/2023/05/gin-and-tonic-recipe-photo-tablefortwoblog-2-scaled.jpg",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 5,
		cocktails_db_drinks_id: null,
		drinks_name: "The Concrete",
		ingredients:
			"2 scoops of cookies and cream ice cream, whole milk, Kahlua, crushed Oreos, chocolate syrup. Garnish with whipped cream and a cherry.",
		recipe: "Blend all non-garnish ingredients. Top with whipped cream and cherry. Serve very cold. Optional Lactaid on the side.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8C9_kELT6-RaHxgkPpTqAruL0_eB6crc0fW9CZD8DViCKu2-17RSzSpm151Djax322Ok&usqp=CAU",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 6,
		cocktails_db_drinks_id: null,
		drinks_name: "Danger Cider",
		ingredients:
			"Apple cider, mulling spices, cinnamon whiskey, whipped cream",
		recipe: "Gently boil the apple cider and mulling spices until fragrant. Add a shot of cinnamon whiskey to the bottom of your mug, then fill with cider. Top with whipped cream and a dash of cinnamon.",
		image: "https://www.simplyorganic.com/sites/default/files/styles/768x768/public/acquiadam/2020-11/Mulled-Apple-Cider-with-Cinnamon-Whipped-Cream-061-1440x700.jpg?itok=VUXixtPQ",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 7,
		cocktails_db_drinks_id: null,
		drinks_name: "Fizz Buzz",
		ingredients: "A shot of any liquor and a can of beer.",
		recipe: "When you're not doing a shot, you're drinking a beer.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyqhNRSg44slH2muujya9K4Vurj0gqKWWKA&usqp=CAU",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 8,
		cocktails_db_drinks_id: null,
		drinks_name: "Espresso Martini",
		ingredients:
			"2 ounces vodka, 1/2 ounce coffee liqueur usually Kahlúa, 1 ounce espresso freshly brewed (or cold brew concentrate), 1/2 ounce simple syrup. Garnish: coffee beans",
		recipe: "Brew the coffee and let it cool completely. Add ice to a cocktail shaker then add the cooled coffee, simple syrup, kahlua and vodka. Shake very hard so the foam is formed then strain it quickly into a martini glass. Top with coffee beans, serve.",
		image: "https://preppykitchen.com/wp-content/uploads/2021/01/espresso-martini-blog-3.jpg",
		glass: "Martini",
		alcoholic: true,
	},
	{
		drinks_id: 9,
		cocktails_db_drinks_id: null,
		drinks_name: "Homemade Rumchata",
		ingredients:
			"1 cup white rice, 1 shot of rum, 2 cinnamon sticks, 1 can evaporated and condensed milk, 1/2 teaspoon vanilla, Ground cinnamon for garnish",
		recipe: "Soak rice overnight with a cinnamon stick in water, puree rice water until smooth, then strain. Stir in vanilla, condensed milk and more water.",
		image: "https://www.jessicagavin.com/wp-content/uploads/2023/04/horchata-30-1200.jpg",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 10,
		cocktails_db_drinks_id: null,
		drinks_name: "Hot Toddy",
		ingredients: "hot black tea, one lemon, honey, Irish whiskey",
		recipe: "Line the bottom of a mug with honey. Squeeze in one wedge of lemon, then drop a second on top of the honey. Add one to two shots of Irish whiskey, Place your tea bag in the mug and pour hot (not boiling) water and steep to desired strength. Stir and enjoy.",
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhomemadehooplah.com%2Fhot-toddy%2F&psig=AOvVaw2GB4llIgUeIrBs9yTqRrCy&ust=1697641907187000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjMsI-v_YEDFQAAAAAdAAAAABAD",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 11,
		cocktails_db_drinks_id: null,
		drinks_name: "Emily's Hot Toddy",
		ingredients:
			"iced pomegranate tea, one lemon, honey, Tennessee bourbon",
		recipe: "Add honey, squeezed lemon, and bourbon to glass. Add ice and pour cold tea over. Stir and enjoy.",
		image: "https://uploads-ssl.webflow.com/60daa13b0b5a8268646b4241/629fa290c5b7de03df2a5d0b_Pomegranate%20Iced%20Green%20Tea%207.jpg",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 12,
		cocktails_db_drinks_id: null,
		drinks_name: "Green Apple Jolly Rancher",
		ingredients: "green apple jolly rancher, chilled vodka",
		recipe: "Drop jolly ranchers into glass. Pour chilled vodka on top. Be careful of choking hazard.",
		image: "https://www.acouplecooks.com/wp-content/uploads/2021/02/Midori-Sour-003.jpg",
		glass: "Big glass",
		alcoholic: true,
	},
	{
		drinks_id: 13,
		cocktails_db_drinks_id: null,
		drinks_name: "Soju Yakult Cocktail",
		ingredients:
			"1 Yakult yogurt drink, Soju (preferably peach), Club Soda(optional)",
		recipe: "Fill glass with Yakult, Soju, top with soda then stir. Enjoy!",
		image: "https://teakandthyme.com/wp-content/uploads/2023/01/soju-yakult-cocktail-DSC_1012-1600.jpg",
		glass: null,
		alcoholic: true,
	},
	{
		drinks_id: 14,
		cocktails_db_drinks_id: null,
		drinks_name: "The Maui",
		ingredients:
			"Coconut Bacardi, pineapple juice, room temperature coconut cream",
		recipe: "Mix all ingredients and enjoy. Serve with or without ice.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Gkk0MDV1-xOxH-H8Bb46safcFUX0Sa4kIQ&usqp=CAU",
		glass: "Smol glass",
		alcoholic: true,
	},
	{
		drinks_id: 15,
		cocktails_db_drinks_id: null,
		drinks_name: "End of the Rainbow",
		ingredients:
			"1 oz Grenadine, 4 oz Pineapple Juice, 4 oz Coconut Rum, 1/2 oz Blue Curacao, 1 oz Ice Water, 1 Orange slice",
		recipe: "Add grenadine to a tall hurricane glass. Fill glass with ice. Combine pineapple juice and coconut rum in a measuring cup; slowly pour mixture into the glass over the ice. Combine water and blue curacao in a measuring cup and slowly pour over pineapple-rum layer. Garnish with an orange slice, if desired.",
		image: "https://www.mainespirits.com/sites/default/files/styles/recipe_-_large_image_style/public/AdobeStock_77284076.jpeg?itok=aTkzCLP8",
		glass: "Smol glass",
		alcoholic: true,
	},
	{
		drinks_id: 16,
		cocktails_db_drinks_id: null,
		drinks_name: "Bee's Knees",
		ingredients:
			"2 ounces gin, 3/4 ounce freshly squeezed lemon juice, 3/4 ounce honey syrup, (recipe follows). Garnish: lemon twist",
		recipe: "Add gin, lemon juice, and honey syrup to a shaker with ice and shake until cold. Strain into a coupe glass, and garnish with lemon twist.",
		image: "https://vinepair.com/wp-content/uploads/2021/12/beesknees_card.jpg",
		glass: "Smol glass",
		alcoholic: true,
	},
	{
		drinks_id: 17,
		cocktails_db_drinks_id: null,
		drinks_name: "Milk Drink",
		ingredients: "Milk",
		recipe: "Pour out milk into cat saucer. Your cats will enjoy!",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VItTfvChQbIaSBXxLiWq-gq-nMdLKiiNJQ&usqp=CAU",
		glass: "Smol glass",
		alcoholic: true,
	},
	{
		drinks_id: 18,
		cocktails_db_drinks_id: null,
		drinks_name: "The Fanclub",
		ingredients:
			"Shaved ice, Bailey's Irish cream. Edible glitter. A plate of nachos.",
		recipe: "Blend ice and Irish cream. Garnish with glitter. Enjoy your nachos. Meow!",
		image: "https://i.imgur.com/bfOw34G.jpeg",
		glass: "Big glass",
		alcoholic: true,
	},
	{
		drinks_id: 19,
		cocktails_db_drinks_id: null,
		drinks_name: "Mangonadas Margarita",
		ingredients:
			"Chamoy, Lime, Mango, Triple sec, Tequila, Tajin, Sugar, Tamarind Chile straws (optional)",
		recipe: "Prep mangos and line the rim of the glass with lime and tajin, add tequila, triple sec, lime juice and sugar into a blender with the prepped mangos then blend. Once smooth add chamoy at the bottom of the glass then the  mixture. Add tamarind chile straws and enjoy!",
		image: "https://senseandedibility.com/wp-content/uploads/2019/04/Mangonadas-Margaritas-Lead-3.jpg",
		glass: "Big glass",
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
		genres_name: "Electronic",
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
		genres_name: "World",
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
		ingredients_id: 11,
	},
	{
		genres_ingredients_id: 2,
		genres_id: 1,
		ingredients_id: 1,
	},
	{
		genres_ingredients_id: 3,
		genres_id: 2,
		ingredients_id: 2,
	},
	{
		genres_ingredients_id: 4,
		genres_id: 3,
		ingredients_id: 12,
	},
	{
		genres_ingredients_id: 5,
		genres_id: 3,
		ingredients_id: 3,
	},
	{
		genres_ingredients_id: 6,
		genres_id: 4,
		ingredients_id: 8,
	},
	{
		genres_ingredients_id: 7,
		genres_id: 4,
		ingredients_id: 4,
	},
	{
		genres_ingredients_id: 8,
		genres_id: 5,
		ingredients_id: 5,
	},
	{
		genres_ingredients_id: 9,
		genres_id: 6,
		ingredients_id: 11,
	},
	{
		genres_ingredients_id: 10,
		genres_id: 6,
		ingredients_id: 6,
	},
	{
		genres_ingredients_id: 11,
		genres_id: 7,
		ingredients_id: 11,
	},
	{
		genres_ingredients_id: 12,
		genres_id: 7,
		ingredients_id: 7,
	},
	{
		genres_ingredients_id: 13,
		genres_id: 8,
		ingredients_id: 8,
	},
	{
		genres_ingredients_id: 14,
		genres_id: 9,
		ingredients_id: 12,
	},
	{
		genres_ingredients_id: 15,
		genres_id: 9,
		ingredients_id: 9,
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
