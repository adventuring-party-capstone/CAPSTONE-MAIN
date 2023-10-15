// const base_url = "https://studiodrink.onrender.com/api";
const base_url = "http://localhost:8080/api";

// grabs all users from LOCAL database
export const fetchAllUsers = async () => {
	try {
		const response = await fetch(`${base_url}/users`);
		const result = await response.json();
		console.log("result from fetchAllUser ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs all drinks from LOCAL database
export const fetchAllDrinks = async () => {
	try {
		const response = await fetch(`${base_url}/drinks`);
		const result = await response.json();
		// console.log("result from fetchAllDrinks ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grab single drink from LOCAL database
export const fetchSingleDrink = async (drink_id) => {
	try {
		const response = await fetch(`${base_url}/drinks/${drink_id}`);
		const result = await response.json();
		// console.log("result from fetchSingleDrink", result);
		return result;
	} catch (error) {
		console.error("there was an error fetching this drink", error);
	}
};

// grab user created drinks from LOCAL database
export const fetchUserCreatedDrinks = async (user_id) => {
	try {
		const response = await fetch(
			`${base_url}/drinks/created-drinks/users/${user_id}`
		);
		const result = await response.json();
		console.log("result from fetchUserCreatedDrinks", result);
		return result;
	} catch (error) {
		console.error("can't fetch user created drinks", error);
	}
};

// grabs all ingredients from LOCAL database
export const fetchAllIngredients = async () => {
	try {
		const response = await fetch(`${base_url}/ingredients`);
		const result = await response.json();
		// console.log("result from fetchAllIngredients ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs all genres from LOCAL database
export const fetchAllGenres = async () => {
	try {
		const response = await fetch(`${base_url}/genres`);
		const result = await response.json();
		// console.log("result from fetchAllGenres ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs all genres ingredients from LOCAL database
export const fetchAllGenresIngredients = async () => {
	try {
		const response = await fetch(`${base_url}/genres_ingredients`);
		const result = await response.json();
		// console.log("result from fetchAllGenresIngredients ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grab user profile by user id
export const fetchSingleUser = async (users_id) => {
	try {
		const response = await fetch(`${base_url}/users/${users_id}`);
		const result = await response.json();
		// console.log("result from fetchSingleUser", result);
		return result;
	} catch (error) {
		console.error("there was an error fetching this user", error);
	}
};

// grabs all users drinks from LOCAL database
export const fetchAllUsersDrinks = async () => {
	try {
		const response = await fetch(`${base_url}/users_drinks`);
		const result = await response.json();
		// console.log("result from fetchAllUsersDrinks ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs specific user's favorites
export const fetchUsersDrinksByUserId = async (users_id) => {
	try {
		// console.log("user_id in fetchUsersDrinksByUserId ", users_id);
		const response = await fetch(`${base_url}/users_drinks/${users_id}`);
		const result = await response.json();
		console.log("result from fetchUsersDrinksByUserId ", result);
		return result;
	} catch (error) {
		console.error(
			"there was an error fetching this individual users's drinks",
			error
		);
	}
};

// grabs alcoholic or non-alcoholic drinks
export const fetchDrinksByAlcoholic = async (alcoholic) => {
	try {
		const response = await fetch(`${base_url}/drinks/drinks/${alcoholic}`);
		const result = await response.json();
		// console.log("result from fetchDrinksByAlcoholic ", result);
		return result;
	} catch (error) {
		console.error("there was an error fetching these drinks :(", error);
	}
};

export const createNewFavorite = async (users_id, drinks_id, api_drinks_id) => {
	try {
		console.log("...starting to post");
		const response = await fetch(`${base_url}/users_drinks`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				users_id: users_id,
				drinks_id: drinks_id,
				api_drinks_id: api_drinks_id,
			}),
		});
		const result = await response.json();
		// console.log("result from createNewFavorite", result);
		// console.log("api_drinks_id", api_drinks_id);
		return result;
	} catch (error) {
		console.error("Cannot post favorite drink", error);
	}
};

// REGISTER
export const register = async (userObj) => {
	try {
		const response = await fetch(`${base_url}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userObj),
		});
		const result = await response.json();
		// console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

// LOGIN
export const login = async (username, password) => {
	try {
		const response = await fetch(`${base_url}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});
		const result = await response.json();
		// console.log("result from login fn", result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

// LOGOUT

export const logout = async () => {
	try {
		const response = await fetch(`${base_url}/users/logout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		console.log("successfully logged out...");
		return result;
	} catch (error) {
		console.error(error);
	}
};

// DELETE FAVORITE LOCAL

export const deleteUserDrink = async (drinks_id) => {
	try {
		console.log("...removing favorite drink local");
		const response = await fetch(`${base_url}/users_drinks/${drinks_id}`, {
			method: "DELETE",
		});
		const result = await response.json();
		console.log("I never want to see that drink again >:( good riddance");
		return result;
	} catch (error) {
		console.log(error);
	}
};

// DELETE FAVORITE API

export const deleteUserDrinkAPI = async (api_drinks_id) => {
	try {
		console.log("...removing favorite drink API");
		const response = await fetch(
			`${base_url}/users_drinks/users_drinks/${api_drinks_id}`,
			{
				method: "DELETE",
			}
		);
		const result = await response.json();
		console.log(
			"I never want to see that API drink again >:( good riddance"
		);
		return result;
	} catch (error) {
		console.log(error);
	}
};

// CREATE NEW DRINK
export const createDrink = async (
	cocktails_db_drinks_id,
	drinks_name,
	ingredients,
	recipe,
	image,
	glass,
	alcoholic,
	userId
) => {
	try {
		console.log(
			"...starting to create drink",
			cocktails_db_drinks_id,
			drinks_name,
			ingredients,
			recipe,
			image,
			glass,
			alcoholic,
			userId
		);
		const response = await fetch(`${base_url}/drinks`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				cocktails_db_drinks_id: cocktails_db_drinks_id,
				drinks_name: drinks_name,
				ingredients: ingredients,
				recipe: recipe,
				image: image,
				glass: glass,
				alcoholic: alcoholic,
				users_id: userId,
			}),
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Cannot post drink", error);
	}
};

//Delete local drink
export const deleteDrink = async (id) => {
	try {
		console.log("entering delete drink in fetching");
		await fetch(`${base_url}/drinks/${id}`, {
			method: "DELETE",
		});
	} catch (error) {
		alert(
			"We're sorry, there has been an error during deletion. Please try again later."
		);
	}
};

//Edit local drink

export const editDrink = async (drinkData, drinkId) => {
	try {
		console.log("entering edit drink in local");
		const response = await fetch(`${base_url}/drinks/${drinkId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(drinkData),
		});
		const result = await response.json();
		alert("Successfully edited drink");
		return result;
	} catch (error) {
		alert(
			"We're sorry, there has been an error during edit. Please try again later."
		);
	}
};
