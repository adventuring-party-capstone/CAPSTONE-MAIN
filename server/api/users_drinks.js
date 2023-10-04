// this file links the API requests for the users drinks table

const express = require("express");
const router = express.Router();

const {
	getAllUsersDrinks,
	getUsersDrinksByUserId,
	createUserDrink,
	deleteUserDrink,
	deleteUserDrinkAPI
} = require("../db/helpers/users_drinks");

// GET - /api/users_drinks - get all users drinks
router.get("/", async (req, res, next) => {
	try {
		console.log("entering api/users_drinks router");
		const users_drinks = await getAllUsersDrinks();
		res.send(users_drinks);
	} catch (error) {
		console.log("error getting all users drinks from router", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/users_drinks/:users_id - get users_drinks by users_id
router.get("/:users_id", async (req, res, next) => {
	try {
		console.log("entering api/users_drinks/:users_id router");
		console.log("param id ", req.params.users_id);
		const favorites = await getUsersDrinksByUserId(req.params.users_id);
		res.send(favorites);
	} catch (error) {
		next(error);
	}
});

// POST - /api/users_drinks - create a new users drinks (user's favorite)
router.post("/", async (req, res, next) => {
	try {
		const userDrink = await createUserDrink(req.body);
		res.send(userDrink);
	} catch (error) {
		next(error);
	}
});

// DELETE - /api/users_drinks/:drinks_id deletes users fav drink from local
router.delete("/:drinks_id", async (req, res, next) => {
	try {
		const userDrink = await deleteUserDrink(req.params.drinks_id);
		res.send(userDrink);
	} catch (error) {
		next(error);
	}
});

// DELETE - /api/users_drinks/users_drinks/:api_drinks_id deletes users fav drink from API

router.delete("/users_drinks/:api_drinks_id", async (req, res, next) => {
	try {
		const userDrink = await deleteUserDrinkAPI(req.params.api_drinks_id);
		res.send(userDrink);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
