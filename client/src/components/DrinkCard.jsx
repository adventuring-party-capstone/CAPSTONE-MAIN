//OLD MVP VERSION CODE

import { useState, useEffect, useParams } from "react";
import {
    fetchAllDrinks,
    fetchAllGenresIngredients,
    fetchAllIngredients,
    fetchAllGenres,
} from "../../fetching/local";
import FavoriteButton from "./FavoriteButton";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

export default function DrinkCard({ musicChoice, userId }) {
    const [drinks, setDrinks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [junctionGenresIngredients, setJunctionGenresIngredients] = useState(
        []
    );
    const [localArray, setLocalArray] = useState([]);
    const [isToggled, setIsToggled] = useState(false);

    // get all drinks
    useEffect(() => {
        async function getAllDrinks() {
            const response = await fetchAllDrinks();
            setDrinks(response);
        }
        getAllDrinks();
    }, []);

    // get all genres
    useEffect(() => {
        async function getAllGenres() {
            const response = await fetchAllGenres();
            setGenres(response);
        }
        getAllGenres();
    }, []);

    // get all genres_ingredients
    useEffect(() => {
        async function getAllGenresIngredients() {
            const junctionGenresIngredients = await fetchAllGenresIngredients();
            setJunctionGenresIngredients(junctionGenresIngredients);
        }
        getAllGenresIngredients();
    }, []);

    // get all ingredients
    useEffect(() => {
        async function getAllIngredients() {
            const ingredients = await fetchAllIngredients();
            setIngredients(ingredients);
        }
        getAllIngredients();
    }, []);

    // matching genre name with genre id
    const genreId = [];

    genres.map((genre) => {
        if (musicChoice.toLowerCase() == genre.genres_name.toLowerCase()) {
            genreId.push(genre.genres_id);
        }
    });

    // getting associated corresponding ingredients_id from genres_id in junctionGenresIngredients
    const filtered_ingredients_ids = [];
    const filtered_ingredients_names = [];

    junctionGenresIngredients.map((junctionGenreIngredient) => {
        if (junctionGenreIngredient.genres_id == genreId[0]) {
            // getting the ingredients_ids associated with genres_id
            filtered_ingredients_ids.push(
                junctionGenreIngredient.ingredients_id
            );

            // getting the ingredients_name associated with ingredients_id
            ingredients.map((ingredient) => {
                if (
                    filtered_ingredients_ids.includes(ingredient.ingredients_id)
                ) {
                    filtered_ingredients_names.push(
                        ingredient.ingredients_name
                    );
                }
            });
        }
    });

    // TOGGLE LOGIC
    function handleSwitch(event) {
        setIsToggled(event.target.checked);
    }

    // Alcohol toggle
    const PinkSwitch = styled(Switch)(({ theme }) => ({
        "& .MuiSwitch-switchBase.Mui-checked": {
            color: pink[600],
            "&:hover": {
                backgroundColor: alpha(
                    pink[600],
                    theme.palette.action.hoverOpacity
                ),
            },
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: pink[600],
        },
    }));

    // local DB array splitting alcoholic/non-alcoholic
    const nonAlcArray = [];
    useEffect(() => {
        drinks.filter((drink) => {
            // filtering alcoholic drinks
            if (drink.alcoholic && isToggled) {
                setLocalArray(drinks);
            } else if (!drink.alcoholic && !isToggled) {
                nonAlcArray.push(drink);
                setLocalArray(nonAlcArray);
            }
        });
    }, [drinks, isToggled]);

    return (
        <>
            <div id="drink-card">
                <h1>DRINK CARD</h1>
                <h1>INGREDIENT {filtered_ingredients_names}</h1>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <PinkSwitch
                                checked={isToggled}
                                onChange={(event) => handleSwitch(event)}
                            />
                        }
                        label="Show alcoholic drinks"
                    />
                </FormGroup>
                {localArray
                    .filter((drink) =>
                        filtered_ingredients_names.includes(drink.ingredients)
                    )
                    .map((drink) => {
                        const drinkId = drink.drinks_id;
                        return (
                            <>
                                <div id="each-drink" key={drink.drinks_id}>
                                    <h1>{drink.drinks_name}</h1>
                                    <img
                                        src={drink.image}
                                        id="drink-card-image"
                                    ></img>
                                    <FavoriteButton
                                        drinkId={drinkId}
                                        userId={userId}
                                    />
                                </div>
                            </>
                        );
                    })}
            </div>
        </>
    );
}
