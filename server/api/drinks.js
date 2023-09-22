// this file links the API requests for the drinks table

const express = require("express");
const router = express.Router();

const { getAllDrinks, getDrinkById } = require("../db/helpers/drinks");

// GET - /api/drinks - get all drinks
router.get("/", async (req, res, next) => {
	try {
		console.log("entering api/drinks router");
		const drinks = await getAllDrinks();
		res.send(drinks);
	} catch (error) {
		console.log("error getting all drinks from router", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/drinks/:drink_id - get drink by id
router.get("/:drink_id", async (req, res, next) => {
	try {
		console.log("entering api/drinks/:drink_id router");
		const drink = await getDrinkById(req.params.drink_id);
		res.send(drink);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
