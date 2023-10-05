const randomDrinkAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
// const randomDrinkId = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// fetch drink orrrrrrr
export const fetchRandomDrink = async () => {
    try {
        console.log("...looking for random drink")
        const response = await fetch(`${randomDrinkAPI}`)
        const result = await response.json();
        const randomDrink = result.drinks;
        console.log("loading random drink...");
        console.log("Here is your random drink!", randomDrink)
        await randomDrink.drinks
        return result;
    } catch (error) {
        console.error("Could not fetch random drink :/")
    };
};
// grabs all ingredients from Cocktail database
export const fetchAllCocktailDBIngredients = async () => {
	try {
		const response = await fetch(`${randomDrinkAPI}/list.php?i=list`);
		const result = await response.json();
		console.log("result from fetchAllIngredients", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

