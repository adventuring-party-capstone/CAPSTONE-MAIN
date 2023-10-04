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

export default function CocktailDBDrinkCard({ ingredientName }) {
	const [alcDrinks, setAlcDrinks] = useState([]);
	const [nonAlcDrinks, setNonAlcDrinks] = useState([]);
	const [byIngredient, setByIngredient] = useState([]);
	// const [ingredName, setIngredName] = useState("");
	//  const [alcArrayToShow, setAlcArrayToShow] = useState([]);
	const [chosenDrinkId, setChosenDrinkId] = useState(null);
	const [drinkToRender, setDrinkToRender] = useState([]);
	const [localArray, setLocalArray] = useState([]);
	const [isToggled, setIsToggled] = useState(false);

	const [randomIndexAlc, setRandomIndexAlc] = useState(null);
	const [randomIndexNonAlc, setRandomIndexNonAlc] = useState(null);

	const ingredName = ingredientName;

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

	console.log("ingredient name at top", ingredientName);

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

	// grabbing cocktails by ingredient (associated with genre) from CocktailDB API
	useEffect(() => {
		//   console.log("ingredientName in UE", ingredientName);
		//   console.log("ingredNamein UE", ingredName);
		//   setTimeout(function, 1000);
		async function getCocktailsByIngredient() {
			const response = await fetchCocktailsByIngredient(ingredName);
			setByIngredient(response.drinks);
		}
		getCocktailsByIngredient();
		//   console.log("byIngredient after useEffect", byIngredient);
	}, [ingredName]);

	// adding all nonalc drinks that fit an ingredient into a single array
	const nonAlcArray = [];
	const ingredientDrinksAPI = [];
	const nonAlcIngredientArray = [];
	useEffect(() => {
		nonAlcDrinks.map((nonAlcDrink) => {
			nonAlcArray.push(nonAlcDrink.idDrink);
		});
		byIngredient.map((ingredientDrink) => {
			ingredientDrinksAPI.push(ingredientDrink.idDrink);
		});

		for (let i = 0; i <= nonAlcArray.length; i++) {
			if (ingredientDrinksAPI.includes(nonAlcArray[i])) {
				nonAlcIngredientArray.push(nonAlcArray[i]);
			}
		}
	}, [byIngredient, nonAlcArray]);

	// adding all alc drinks that fit an ingredient into a single array
	const alcArray = [];
	const alcIngredientArray = [];
	useEffect(() => {
		alcDrinks.map((alcDrink) => {
			//strips down to [id numbers of alc drinks]
			alcArray.push(alcDrink.idDrink);
		});
		byIngredient.map((ingredientDrink) => {
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

		randomizeIndices(); // If we want randomization on the first load, then comment it in
	}, [alcDrinks, byIngredient]);

	// concatenate the alcDrinkIngredient and nonAlcDrinkIngredient Arrays
	// conditionally setChosenDrinkId based on whether it's from non or concat array

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
			setChosenDrinkId(localArray[randomIndexAlc]);
		} else {
			setChosenDrinkId(localArray[randomIndexNonAlc]);
		}
	}

	useEffect(() => {
		if (isToggled) {
			setChosenDrinkId(localArray[randomIndexAlc]);
		} else if (!isToggled && nonAlcIngredientArray.length > 0) {
			setChosenDrinkId(nonAlcIngredientArray[randomIndexNonAlc]);
		} else if (!isToggled && nonAlcIngredientArray.length == 0) {
			setChosenDrinkId(12698); //mango lassi ID
		}
	}, [localArray, nonAlcIngredientArray, isToggled]);

	// fetching cocktail by id from API
	useEffect(() => {
		console.log("chosenDrinkId in UE", chosenDrinkId);
		const chosenId = chosenDrinkId;
		async function getCocktailById() {
			const response = await fetchCocktailById(chosenId);
			console.log("response from getCocktailById", response);
			if (response) {
				setDrinkToRender(response.drinks[0]);
			} else {
				console.log("can't get single drink to render");
			}
		}
		getCocktailById();
	}, [chosenDrinkId, isToggled]);

	console.log("drink to render above return", drinkToRender);
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
					label="Show alcoholic drinks"
				/>
			</FormGroup>
			{/* {console.log("alcArrayToShow below Hello", alcArrayToShow)} */}
			{drinkToRender && <h1>{drinkToRender.strDrink}</h1>}
			{drinkToRender && <img src={drinkToRender.strDrinkThumb} />}
			<br />
			{<DetailsButton drink={chosenDrinkId} />}
			<button onClick={handleClick}>Suggest Another Drink</button>
		</section>
	);
}
