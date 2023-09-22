// this file links the API requests for the ingredients table

const express = require("express");
const router = express.Router();

const { getAllIngredients, getIngredientById } = require("../db/helpers/ingredients");

// GET - /api/ingredients - get all ingredients
router.get("/", async (req, res, next) => {
	try {
		console.log("entering api/ingredients router");
		const ingredients = await getAllIngredients();
		res.send(ingredients);
	} catch (error) {
		console.log("error getting all ingredients from router", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/ingredients/:ingredient_id - get ingredient by id
router.get("/:ingredient_id", async (req, res, next) => {
	try {
		console.log("entering api/ingredients/:ingredient_id router");
		const ingredient = await getIngredientById(req.params.ingredient_id);
		res.send(ingredient);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
