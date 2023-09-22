// This file handles the routing for the API

const express = require("express");
const router = express.Router();

// GET /api/health
router.get("/health", (req, res, next) => {
	res.send("OK");
});

// ROUTER: /api/drinks
router.use("/drinks", require("./drinks"));

// ROUTER: /api/genres
router.use("/genres", require("./genres"));

module.exports = router;
