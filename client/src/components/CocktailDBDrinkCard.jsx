import { useState, useEffect } from "react";
import {
	fetchAllAlcDrinks,
	fetchAllNonAlcDrinks,
	fetchCocktailsByIngredient,
	fetchCocktailById,
} from "../../fetching/cocktaildb";
import DetailsButton from "./DetailsButton";
import FavoriteButton from "./FavoriteButton.jsx";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import SingleDrinkDetails from "./SingleDrinkDetails";

export default function CocktailDBDrinkCard({
	alcIngredientName,
	nonAlcIngredientName,
	token,
	userId,
	oldInput,
	musicChoice,
}) {
	const [alcDrinks, setAlcDrinks] = useState([]);
	const [nonAlcDrinks, setNonAlcDrinks] = useState([]);
	const [byAlcIngredient, setByAlcIngredient] = useState([]);
	const [byNonAlcIngredient, setByNonAlcIngredient] = useState([]);
	const [alcChosenDrinkId, setAlcChosenDrinkId] = useState(null);
	const [nonAlcChosenDrinkId, setNonAlcChosenDrinkId] = useState(null);
	const [drinkToRender, setDrinkToRender] = useState([]);
	const [localArray, setLocalArray] = useState([]);
	const [isToggled, setIsToggled] = useState(false);

	const [randomIndexAlc, setRandomIndexAlc] = useState(null);
	const [randomIndexNonAlc, setRandomIndexNonAlc] = useState(null);

	const alcIngredName = alcIngredientName;
	const nonAlcIngredName = nonAlcIngredientName;

	const [alcIds, setAlcIds] = useState([]);

	console.log("oldInput in CDBDC", oldInput);

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

	// console.log("ingredient name at top", ingredientName);

	// grabbing alcoholic drinks from CocktailDB API
	useEffect(() => {
		async function getAllAlcDrinks() {
			const response = await fetchAllAlcDrinks();
			setAlcDrinks(response.drinks);
		}
		getAllAlcDrinks();
	}, []);

	// grabbing nonalcoholic drinks from CocktailDB API
	useEffect(() => {
		async function getAllNonAlcDrinks() {
			const response = await fetchAllNonAlcDrinks();

			setNonAlcDrinks(response.drinks);
		}
		getAllNonAlcDrinks();
	}, []);

	// grabbing cocktails by alc ingredient (associated with genre) from CocktailDB API
	useEffect(() => {
		async function getCocktailsByIngredient() {
			const response = await fetchCocktailsByIngredient(alcIngredName);
			setByAlcIngredient(response.drinks);
		}
		getCocktailsByIngredient();
	}, [alcIngredName]);

	// grabbing cocktails by non alc ingredient (associated with genre) from CocktailDB API
	useEffect(() => {
		async function getCocktailsByIngredient() {
			const response = await fetchCocktailsByIngredient(nonAlcIngredName);
			setByNonAlcIngredient(response.drinks);
		}
		getCocktailsByIngredient();
	}, [nonAlcIngredName]);

	// adding all nonalc drinks that fit an ingredient into a single array
	const nonAlcArray = [];
	const ingredientDrinksAPI = [];
	const nonAlcIngredientArray = [];
	useEffect(() => {
		nonAlcDrinks.map((nonAlcDrink) => {
			nonAlcArray.push(nonAlcDrink.idDrink);
		});
		byNonAlcIngredient.map((ingredientDrink) => {
			ingredientDrinksAPI.push(ingredientDrink.idDrink);
		});

		for (let i = 0; i <= nonAlcArray.length; i++) {
			if (ingredientDrinksAPI.includes(nonAlcArray[i])) {
				nonAlcIngredientArray.push(nonAlcArray[i]);
			}
		}
	}, [byNonAlcIngredient, nonAlcArray]);

	// adding all alc drinks that fit an ingredient into a single array
	let alcArray = [];
	let alcIngredientArray = [];
	useEffect(() => {
		alcDrinks.map((alcDrink) => {
			//strips down to [id numbers of alc drinks]
			alcArray.push(alcDrink.idDrink);
		});
		byAlcIngredient.map((ingredientDrink) => {
			//strips down to [id numbers of drinks w/ ingredient]
			ingredientDrinksAPI.push(ingredientDrink.idDrink);
		});
		for (let i = 0; i <= alcArray.length; i++) {
			if (ingredientDrinksAPI.includes(alcArray[i])) {
				//[compares the ids between the two]
				alcIngredientArray.push(alcArray[i]);
			}
		}
		// console.log("alcIngredientArray", alcIngredientArray);
		const bothArrays = alcIngredientArray.concat(nonAlcIngredientArray);
		setLocalArray(bothArrays);
		// console.log("bothArrays in line 139", bothArrays);

		setAlcIds(alcIngredientArray);
		randomizeIndices(); // If we want randomization on the first load, then comment it in
	}, [alcDrinks, byAlcIngredient]);

	// function randomizes indices so we can get a random drink
	function randomizeIndices() {
		const alcIndex = Math.floor(Math.random() * localArray.length);
		const nonAlcIndex = Math.floor(
			Math.random() * nonAlcIngredientArray.length
		);
		setRandomIndexAlc(alcIndex);
		setRandomIndexNonAlc(nonAlcIndex);
	}

	// handles the suggesting of another drink
	function handleClick() {
		randomizeIndices();

		if (isToggled) {
			setAlcChosenDrinkId(localArray[randomIndexAlc]);
		} else {
			setNonAlcChosenDrinkId(localArray[randomIndexNonAlc]);
		}
	}

	useEffect(() => {
		if (oldInput !== musicChoice) {
			randomizeIndices();
		}
	}, [oldInput, musicChoice]);

	useEffect(() => {
		if (isToggled) {
			setAlcChosenDrinkId(localArray[randomIndexAlc]);
		} else if (!isToggled && nonAlcIngredientArray.length > 0) {
			setNonAlcChosenDrinkId(nonAlcIngredientArray[randomIndexNonAlc]);
		}
	}, [localArray, nonAlcIngredientArray, isToggled, nonAlcChosenDrinkId]);

	// fetching cocktail by id from API
	useEffect(() => {
		// console.log("alcChosenDrinkId in UE", alcChosenDrinkId);
		const alcChosenId = alcChosenDrinkId;
		const nonAlcChosenId = nonAlcChosenDrinkId;
		async function getCocktailById() {
			if (isToggled && alcChosenId) {
				const response = await fetchCocktailById(alcChosenId);
				console.log("alc response from getCocktailById", response);
				if (response) {
					setDrinkToRender(response.drinks[0]);
				} else {
					console.log("can't get single drink to render");
				}
			} else if (!isToggled && nonAlcChosenId) {
				const response = await fetchCocktailById(nonAlcChosenId);
				console.log("nonAlc response from getCocktailById", response);
				if (response) {
					setDrinkToRender(response.drinks[0]);
				} else {
					console.log("can't get single drink to render");
				}
			}
		}
		getCocktailById();
	}, [alcChosenDrinkId, nonAlcChosenDrinkId, isToggled]);

	console.log("drink to render above return", drinkToRender);
	console.log("alcIds at 192", alcIds);

	return (
		<section id="drink-card">
			<FormGroup>
				<FormControlLabel
					control={
						<PinkSwitch
							checked={isToggled}
							onChange={(event) => handleSwitch(event)}
						/>
					}
					label={
						isToggled
							? "Click to hide alcoholic drinks"
							: "Click to show both alcoholic and nonalcoholic drinks"
					}
				/>
			</FormGroup>
			<h3>🍸 Drink Contains Alcohol</h3>
			{/* if the drink to render.idDrink is in the alcIngredientArray*/}
			<div id="flip-card">
				<div id="snackbar">
					<h1>Added to favorites</h1>
				</div>
				<div id="flip-card-inner">
					<div id="flip-card-front">
						{drinkToRender &&
						alcIds.includes(drinkToRender.idDrink) &&
						isToggled ? (
							<div>
								<br />
								<h2>🍸{drinkToRender.strDrink}</h2>
							</div>
						) : (
							<div>
								<br />
								<h2>{drinkToRender.strDrink}</h2>
							</div>
						)}
						{drinkToRender && (
							<img
								src={drinkToRender.strDrinkThumb}
								id="images"
							/>
						)}
					</div>
					<div id="flip-card-back">
						<h1>{drinkToRender.strDrink}</h1>
						{token && (
							<FavoriteButton
								api_drinks_id={
									alcChosenDrinkId
										? alcChosenDrinkId
										: nonAlcChosenDrinkId
								}
								userId={userId}
							/>
						)}
						{
							<SingleDrinkDetails
								drinkId={
									alcChosenDrinkId
										? alcChosenDrinkId
										: nonAlcChosenDrinkId
								}
							/>
						}
					</div>
				</div>
			</div>
			<br />
			<button onClick={handleClick} id="pink-button">
				Suggest Another Drink
			</button>
		</section>
	);
}
