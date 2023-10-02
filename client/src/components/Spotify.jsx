// This component grabs data from spotify for use on front end

import { useEffect, useState } from "react";
import { fetchArtistSearch } from "../../fetching/spotify.js";
import {
	fetchAllDrinks,
	fetchAllGenres,
	fetchAllIngredients,
	fetchAllGenresIngredients,
} from "../../fetching/local.js";
import FavoriteButton from "./FavoriteButton.jsx";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import CocktailDBDrinkCard from "./CocktailDBDrinkCard.jsx";

export default function Spotify({ musicChoice, userId }) {
	const [drinks, setDrinks] = useState([]);
	const [localGenres, setLocalGenres] = useState([]);
	const [artistGenres, setArtistGenres] = useState([]);
	const [matchedGenres, setMatchedGenres] = useState("");
	const [junctionGenresIngredients, setJunctionGenresIngredients] = useState(
		[]
	);
	const [ingredients, setIngredients] = useState([]);
	const [localArray, setLocalArray] = useState([]);
	const [isToggled, setIsToggled] = useState(false);
	const [filteredIngredNames, setFilteredIngredNames] = useState([]);

	// get all drinks
	useEffect(() => {
		async function getAllDrinks() {
			const response = await fetchAllDrinks();
			console.log(response);
			setDrinks(response);
		}
		getAllDrinks();
	}, []);

	// fetch all genres from local API
	useEffect(() => {
		async function getAllGenres() {
			console.log("entering getAllGenres in Spotify component");

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
			console.log("entering getSpotifyGenres");
			try {
				const APIArtistGenre = await fetchArtistSearch(musicChoice);
				setArtistGenres(APIArtistGenre);
			} catch (error) {
				console.error("can't get all genres ", error);
			}
		}
		getSpotifyGenre();
	}, []);

	function compareGenres() {
		// grab first genre from the spotify genre array for the artist
		console.log("entering compareGenres");

		// loop through genres in the artist genre array
		// loop through genres in the seedData genres array
		// return the first one that matches

		for (let i = 0; i < artistGenres.length; i++) {
			//  first iteration: r&b
			// console.log("current artist genre", artistGenres[i]);
			for (let j = 0; j < localGenres.length; j++) {
				// console.log("current local genre", localGenres[j].genres_name);

				if (
					artistGenres[i].includes(localGenres[j].genres_name.toLowerCase())
				) {
					// console.log("localGenre in loop", localGenres[j]);
					return localGenres[j];
				}
			}
		}
	}

	// compare the local genres with the spotify artist genre
	useEffect(() => {
		// console.log("entering compare genres useEffect");
		// console.log("localGenres in compare UE", localGenres);
		// console.log("artist genres in UE", artistGenres);
		async function compareArtistGenres() {
			try {
				const foundGenre = compareGenres();
				setMatchedGenres(foundGenre);
				console.log("found genre in UE", foundGenre);
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
		console.log("matched genres in junction filtering ", matchedGenres);
		console.log("LOGGING FILTERED INGREDIENTS...");
		junctionGenresIngredients.map((junctionGenreIngredient) => {
			console.log("matched genres in junction filtering ", matchedGenres);

			if (junctionGenreIngredient.genres_id == matchedGenres.genres_id) {
				// getting the ingredients_ids associated with genres_id
				filtered_ingredients_ids.push(junctionGenreIngredient.ingredients_id);

				// getting the ingredients_name associated with ingredients_id
				ingredients.map((ingredient) => {
					if (filtered_ingredients_ids.includes(ingredient.ingredients_id)) {
						filtered_ingredients_names.push(ingredient.ingredients_name);
					}
				});

				setFilteredIngredNames(filtered_ingredients_names);
				// console.log("filtered ingred names", filtered_ingredients_names);
				// console.log("bourbon?", filtered_ingredients_names[0]);
			}
		});
	}, [matchedGenres]);

	// TOGGLE LOGIC
	function handleSwitch(event) {
		setIsToggled(event.target.checked);
	}

	// Alcohol toggle
	const PinkSwitch = styled(Switch)(({ theme }) => ({
		"& .MuiSwitch-switchBase.Mui-checked": {
			color: pink[600],
			"&:hover": {
				backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
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
		console.log("localArray ", localArray);
	}, [drinks, isToggled]);

	return (
		<div>
			{/* {matchedGenres && <h1>Found genre: {matchedGenres.genres_name}</h1>} */}
			{/* <FormGroup>
				<FormControlLabel
					control={
						<PinkSwitch
							checked={isToggled}
							onChange={(event) => handleSwitch(event)}
						/>
					}
					label="Show alcoholic drinks"
				/>
			</FormGroup> */}
			{filteredIngredNames && (
				<CocktailDBDrinkCard ingredientName={filteredIngredNames[0]} />
			)}
		</div>
	);
}

// {filtered_ingredients_names && (
//     <div>
//         {localArray
//             .filter((drink) =>
//                 filtered_ingredients_names.includes(drink.ingredients)
//             )
//             .map((drink) => {
//                 const drinkId = drink.drinks_id;
//                 return (
//                     <>
//                         <div id="each-drink" key={drink.drinks_id}>
//                             <h3>{drink.drinks_name}</h3>
//                             <img src={drink.image}></img>
//                             <FavoriteButton drinkId={drinkId} userId={userId} />
//                         </div>
//                     </>
//                 );
//             })}
//     </div>
// )}
