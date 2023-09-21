// pull in connection to local database

const client = require("./client");

const { createUser } = require('./helpers/users');
const {createDrink} = require('./helpers/drinks');
const { users, drinks } = require('./seedData')
// Drop Tables for cleanliness

const dropTables = async () => {
    try {
        console.log("Starting to drop tables");
        await client.query(`
        DROP TABLE IF EXISTS users cascade;
        DROP TABLE IF EXISTS drinks cascade;
        DROP TABLE IF EXISTS genres cascade;
        DROP TABLE IF EXISTS users_drinks_favorites cascade;
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
        CREATE TABLE users_drinks_favorites(
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
        console.log('...starting to create initial users')
        console.log("users", users)
        for (const user of users) {
            await createUser(user);
        }
        console.log("initial users created");
        console.log("Users", users)
    } catch (error) {
        throw error;
    }
};
const createInitialDrinks = async () => {
    try {
        console.log("...starting to create initial drinks")
        for (const drink of drinks){
            await createDrink(drink);
        }
        console.log("initial drinks created")
        console.log("Drinks", drinks)
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
        console.log("starting to seed data...")
        await createInitialUsers();
        await createInitialDrinks();
    } catch (error) {
        console.error("Can't build DB", error);
    } finally {
        // close connection
        client.end();
    }
};

rebuildDb();
