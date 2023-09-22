// this file links the API requests for the genres table

const express = require("express");
const router = express.Router();

const { getAllGenres, getGenreById } = require("../db/helpers/genres");

// GET - /api/genres - get all genres
router.get("/", async (req, res, next) => {
    try {
        console.log("entering api/genres router");
        const genres = await getAllGenres();
        res.send(genres);   
    } catch (error) {
        console.log("error getting all genres from the router", error);
        res.send([]);
        next(error);
    }
});

// GET - /api/genres/:genres_id - get genre by id
router.get("/:genre_id", async (req, res, next) => {
    try {
        console.log("entering api/genres/:genre_id router");
        const genre = await getGenreById(req.params.genre_id);
        res.send(genre);
    } catch (error) {
        next(error);
    }
});

module.exports = router;