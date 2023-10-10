// this file links the API requests for the drinks table

const express = require("express");
const router = express.Router();

const {
     getAllDrinks,
     getDrinkById,
     getDrinksByAlcoholic,
     createDrink,
     getDrinksByUserId,
     deleteDrink,
} = require("../db/helpers/drinks");

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

// GET - /api/drinks/drinks/:alcoholic
router.get("/drinks/:alcoholic", async (req, res, next) => {
     try {
          console.log("entering api/drinks/:alcoholic router");
          const drink = await getDrinksByAlcoholic(req.params.alcoholic);
          res.send(drink);
     } catch (error) {
          next(error);
     }
});

// GET - /api/drinks/created-drinks/users/:userId
router.get("/created-drinks/users/:userId", async (req, res, next) => {
     try {
          console.log(
               "entering api/drinks/created-drinks/users/:userId router"
          );
          const drink = await getDrinksByUserId(req.params.userId);
          res.send(drink);
     } catch (error) {
          next(error);
     }
});

// POST - /api/drinks - create a new drink
router.post("/", async (req, res, next) => {
     try {
          console.log("entering api/drinks create new drink router");
          const newDrink = await createDrink(req.body);
          res.send(newDrink);
     } catch (error) {
          next(error);
     }
});

//DELETE - /api/drinks/:drinkid

router.delete("/:id", async (req, res, next) => {
     try {
          console.log("entering delete drink router");
          const drink = await deleteDrink(req.params.id);
          res.send(drink);
     } catch (error) {
          next(error);
     }
});
module.exports = router;
