const base_url = "https://www.thecocktaildb.com/api/json/v2/9973533";

// grabs all alc drinks from Cocktail database
export const fetchAllAlcDrinks = async () => {
	try {
		const response = await fetch(`${base_url}/filter.php?a=Alcoholic`);
		const result = await response.json();
		console.log("result from fetchAllAlcDrinks", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs all non-alcoholic drinks from Cocktail database
export const fetchAllNonAlcDrinks = async () => {
	try {
		const response = await fetch(`${base_url}/filter.php?a=Non_Alcoholic`);
		const result = await response.json();
		console.log("result from fetchAllNonAlcDrinks", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs all ingredients from Cocktail database
export const fetchAllCocktailDBIngredients = async () => {
	try {
		const response = await fetch(`${base_url}/list.php?i=list`);
		const result = await response.json();
		console.log("result from fetchAllIngredients", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs cocktail by ingredient
export const fetchCocktailsByIngredient = async (ingredient) => {
	console.log("ingredient in FCBI", ingredient);
	try {
		const response = await fetch(
			`${base_url}/filter.php?i=${ingredient.toLowerCase()}`
		);
		console.log("response from fetchCocktailsByIngredient", response);
		const result = await response.json();
		console.log("result from fetchCocktailsByIngredient", result);
		return result;
	} catch (error) {
		console.error(
			"there was an error fetching cocktails by its ingredient",
			error
		);
	}
};
