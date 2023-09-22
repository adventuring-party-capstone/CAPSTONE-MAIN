// This file handles the routing for the API

const express = require("express");
const router = express.Router();

// GET /api/health
router.get("/health", (req, res, next) => {
	res.send("OK");
});

// ROUTER: /api/drinks
router.use("/drinks", require("./drinks"));

// ROUTER: /api/ingredients
router.use("/ingredients", require("./ingredients"));

// ROUTER: /api/genres
router.use("/genres", require("./genres"));

// ROUTER: /api/genres_ingredients
router.use("/genres_ingredients", require("./genres_ingredients"));

// ROUTER: /api/users_drinks
router.use("/users_drinks", require("./users_drinks"));

module.exports = router;
