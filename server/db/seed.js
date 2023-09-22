// pull in connection to local database

const client = require("./client");

const { createUser } = require("./helpers/users");
const { createDrink } = require("./helpers/drinks");
const { createGenre } = require("./helpers/genres");
const { createIngredient } = require("./helpers/ingredients");
const { createGenreIngredient } = require("./helpers/genres_ingredients");
const { createUserDrink } = require("./helpers/users_drinks");
const {
    users,
    drinks,
    genres,
    ingredients,
    genres_ingredients,
    users_drinks,
} = require("./seedData");
// Drop Tables for cleanliness

const dropTables = async () => {
    try {
        console.log("Starting to drop tables");
        await client.query(`
        DROP TABLE IF EXISTS users cascade;
        DROP TABLE IF EXISTS drinks cascade;
        DROP TABLE IF EXISTS genres cascade;
        DROP TABLE IF EXISTS users_drinks cascade;
        DROP TABLE IF EXISTS ingredients cascade;
        DROP TABLE IF EXISTS genres_ingredients cascade;
        `);
        console.log("Tables dropped!");
    } catch (error) {
        console.log("Error dropping tables");
        throw error;
    }
};

//Create Tables
const createTables = async () => {
    console.log("Building tables...");
    await client.query(
        `CREATE TABLE users (
            users_id SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
        CREATE TABLE drinks (
            drinks_id SERIAL PRIMARY KEY,
            cocktails_db_drinks_id INTEGER,
            drinks_name varchar(255) NOT NULL,
            ingredients TEXT,
            recipe TEXT,
            image TEXT,
            glass varchar(255),
            alcoholic BOOLEAN
        );
        CREATE TABLE users_drinks(
            users_drinks_id SERIAL PRIMARY KEY,
            users_id INTEGER REFERENCES users(users_id),
            drinks_id INTEGER REFERENCES drinks(drinks_id)
        );
        CREATE TABLE genres(
            genres_id SERIAL PRIMARY KEY,
            genres_name varchar(255) NOT NULL
        );
        CREATE TABLE ingredients(
            ingredients_id SERIAL PRIMARY KEY,
            cocktails_db_ingredients_id INTEGER,
            ingredients_name varchar(255) NOT NULL
        );
        CREATE TABLE genres_ingredients(
            genres_ingredients_id SERIAL PRIMARY KEY,
            genres_id INTEGER REFERENCES genres(genres_id),
            ingredients_id INTEGER REFERENCES ingredients(ingredients_id)
        );
        `
    );
    console.log("Tables built!");
};

// Create initial users
const createInitialUsers = async () => {
    try {
        console.log("...starting to create initial users");
        console.log("users", users);
        for (const user of users) {
            await createUser(user);
        }
        console.log("initial users created");
        console.log("Users", users);
    } catch (error) {
        throw error;
    }
};

//creating initial drinks
const createInitialDrinks = async () => {
    try {
        console.log("...starting to create initial drinks");
        for (const drink of drinks) {
            await createDrink(drink);
        }
        console.log("initial drinks created");
        console.log("Drinks", drinks);
    } catch (error) {
        throw error;
    }
};

//creating initial genres
const createInitialGenres = async () => {
    try {
        console.log("starting to create initial genres...");
        for (const genre of genres) {
            await createGenre(genre);
        }
        console.log("initial genres created!");
        console.log("Genres ", genres);
    } catch (error) {
        throw error;
    }
};

//creating initial ingredients
const createInitialIngredients = async () => {
    try {
        console.log("starting to create initial ingredients...");
        for (const ingredient of ingredients) {
            await createIngredient(ingredient);
        }
        console.log("initial ingredient created!");
        console.log("Ingredients", ingredients);
    } catch (error) {
        throw error;
    }
};

//creating initial genre ingredients
const createInitialGenresIngredients = async () => {
    try {
        console.log("starting to create initial genres ingredients...");
        for (const genre_ingredient of genres_ingredients) {
            await createGenreIngredient(genre_ingredient);
        }
        console.log("initial genre ingredient created!");
        console.log("genres ingredients", genres_ingredients);
    } catch (error) {
        throw error;
    }
};

//creating initial users drinks favorites
const createInitialUsersDrinks = async () => {
    try {
        console.log("starting to create initial users drinks favorites...");
        for (const user_drink of users_drinks) {
            await createUserDrink(user_drink);
        }
        console.log("initial user drink created!");
        console.log("users drinks", users_drinks);
    } catch (error) {
        throw error;
    }
};

// Call all functions and build database
const rebuildDb = async () => {
    try {
        // connect to local database
        console.log("entering rebuildDB function");
        client.connect();

        // run functions
        await dropTables();
        await createTables();

        // Generating starting data
        console.log("starting to seed data...");
        await createInitialUsers();
        await createInitialDrinks();
        await createInitialGenres();
        await createInitialIngredients();
        await createInitialGenresIngredients();
        await createInitialUsersDrinks();
    } catch (error) {
        console.error("Can't build DB", error);
    } finally {
        // close connection
        client.end();
    }
};

rebuildDb();
