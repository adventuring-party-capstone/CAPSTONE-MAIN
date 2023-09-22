// this file links the API requests for the genres_ingredients table

const express = require("express");
const router = express.Router();

const { getAllGenresIngredients } = require("../db/helpers/genres_ingredients");

// GET - /api/genres_ingredients - get all genres ingredients
router.get("/", async (req, res, next) => {
    try {
        console.log("entering api/genres_ingredients router");
        const genres_ingredients = await getAllGenresIngredients();
        res.send(genres_ingredients);
    } catch (error) {
        console.log("error getting all genres ingredients from router", error);
        res.send([]);
        next(error);
    }
});

module.exports = router;
