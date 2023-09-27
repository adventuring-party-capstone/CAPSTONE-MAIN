const base_url = "http://localhost:8080/api";

// grabs all drinks from LOCAL database
export const fetchAllDrinks = async () => {
	try {
		const response = await fetch(`${base_url}/drinks`);
		const result = await response.json();
		console.log("result from fetchAllDrinks ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs all ingredients from LOCAL database
export const fetchAllIngredients = async () => {
	try {
		const response = await fetch(`${base_url}/ingredients`);
		const result = await response.json();
		console.log("result from fetchAllIngredients ", result);
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
		console.log("result from fetchAllGenres ", result);
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
		console.log("result from fetchAllGenresIngredients ", result);
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
		console.log("result from fetchSingleUser ", result);
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
		console.log("result from fetchAllUsersDrinks ", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

// grabs specific user's favorites
export const fetchUsersDrinksByUserId = async (users_id) => {
	try {
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

export const createNewFavorite = async (users_id, drinks_id) => {
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
			}),
		});
		const result = await response.json();
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
		console.log(result);
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

// DELETE FAVORITE

export const deleteUserDrink = async (drinks_id) => {
	try {
		console.log("...removing favorite drink");
		const response = await fetch (`${base_url}/users_drinks/${drinks_id}`,{
			method: "DELETE",
		});
		const result = await response.json();
		console.log("I never want to see that drink again >:( good riddance")
		return result;
	} catch (error) {
		console.log(error);
	}
};