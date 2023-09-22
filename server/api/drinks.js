// this file links the API requests for the drinks table

const express = require("express");
const router = express.Router();

const { getAllDrinks } = require("../db/helpers/drinks");

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

module.exports = router;
