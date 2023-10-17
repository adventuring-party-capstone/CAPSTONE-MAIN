// This component grabs data from spotify for use on front end

import { useEffect, useState } from "react";
import { fetchArtistSearch, fetchToken } from "../../fetching/spotify.js";
import {
    fetchAllDrinks,
    fetchAllGenres,
    fetchAllIngredients,
    fetchAllGenresIngredients,
} from "../../fetching/local.js";
import FavoriteButton from "./FavoriteButton.jsx";
import * as React from "react";
import CocktailDBDrinkCard from "./CocktailDBDrinkCard.jsx";

export default function Spotify({
    musicChoice,
    userId,
    spotifyToken,
    setSpotifyToken,
    token,
    oldInput,
}) {
    const [drinks, setDrinks] = useState([]);
    const [localGenres, setLocalGenres] = useState([]);
    const [artistGenres, setArtistGenres] = useState([]);
    const [matchedGenres, setMatchedGenres] = useState("");
    const [junctionGenresIngredients, setJunctionGenresIngredients] = useState(
        []
    );
    const [ingredients, setIngredients] = useState([]);
    const [filteredIngredNames, setFilteredIngredNames] = useState([]);

    // get token
    useEffect(() => {
        async function getToken() {
            const response = await fetchToken();
            if (response) {
                setSpotifyToken(response.access_token);
                localStorage.setItem("spotifyToken", response.access_token);
            } else {
                console.log("Not authorized on spotify");
            }
        }
        getToken();
    }, []);

    // get all drinks
    useEffect(() => {
        async function getAllDrinks() {
            const response = await fetchAllDrinks();
            setDrinks(response);
        }
        getAllDrinks();
    }, []);

    // fetch all genres from local API
    useEffect(() => {
        async function getAllGenres() {
            try {
                const localDatabaseGenre = await fetchAllGenres();
                setLocalGenres(localDatabaseGenre);
            } catch (error) {
                console.error("can't get all genres ", error);
            }
        }
        getAllGenres();
    }, []);

    // fetch genre from spotify API based on user input for artist
    useEffect(() => {
        async function getSpotifyGenre() {
            let spotifyTokenSG = localStorage.getItem("spotifyToken");
            try {
                const APIArtistGenre = await fetchArtistSearch(
                    musicChoice,
                    spotifyTokenSG
                );
                setArtistGenres(APIArtistGenre);
            } catch (error) {
                console.error("can't get all genres ", error);
            }
        }
        getSpotifyGenre();
    }, [musicChoice, spotifyToken]);

    function compareGenres() {
        for (let i = 0; i < artistGenres.length; i++) {
            //  first iteration: r&b
            for (let j = 0; j < localGenres.length; j++) {
                if (
                    artistGenres[i].includes(
                        localGenres[j].genres_name.toLowerCase()
                    )
                ) {
                    return localGenres[j];
                }
            }
        }
    }

    // compare the local genres with the spotify artist genre
    useEffect(() => {
        async function compareArtistGenres() {
            try {
                const foundGenre = compareGenres();
                if (foundGenre) {
                    setMatchedGenres(foundGenre);
                } else {
                    setMatchedGenres([]);
                }
            } catch (error) {
                console.error(error);
            }
        }
        compareArtistGenres();
    }, [artistGenres, localGenres]);

    // get all genres_ingredients
    useEffect(() => {
        async function getAllGenresIngredients() {
            const juncGenresIngredients = await fetchAllGenresIngredients();
            setJunctionGenresIngredients(juncGenresIngredients);
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

    // getting associated corresponding ingredients_id from genres_id in junctionGenresIngredients
    const filtered_ingredients_ids = [];
    const filtered_ingredients_names = [];

    useEffect(() => {
        junctionGenresIngredients.map((junctionGenreIngredient) => {
            if (junctionGenreIngredient.genres_id == matchedGenres.genres_id) {
                // getting the ingredients_ids associated with genres_id
                filtered_ingredients_ids.push(
                    junctionGenreIngredient.ingredients_id
                );

                // getting the ingredients_name associated with ingredients_id
                ingredients.map((ingredient) => {
                    if (
                        filtered_ingredients_ids.includes(
                            ingredient.ingredients_id
                        )
                    ) {
                        filtered_ingredients_names.push(
                            ingredient.ingredients_name
                        );
                    }
                });
                setFilteredIngredNames(filtered_ingredients_names);
            } else if (matchedGenres.length == 0) {
                filtered_ingredients_names.push("Water");
                setFilteredIngredNames(filtered_ingredients_names);
            }
        });
    }, [matchedGenres]);

    return (
        <div>
            {filteredIngredNames && (
                <CocktailDBDrinkCard
                    userId={userId}
                    token={token}
                    alcIngredientName={filteredIngredNames[1]}
                    nonAlcIngredientName={filteredIngredNames[0]}
                    oldInput={oldInput}
                    musicChoice={musicChoice}
                />
            )}
        </div>
    );
}
