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
	const [toggleArray, setToggleArray] = useState([]);

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

	useEffect(() => {
		async function getAllAlcDrinks() {
			const response = await fetchAllAlcDrinks();
			// console.log("response in getAllAlcDrinks on CDB Drink Card ", response);
			setAlcDrinks(response.drinks);
		}
		getAllAlcDrinks();
		// console.log("alc drinks in the useEffect", alcDrinks);
		//COMMENTED OUT FOR SIMPLICITY OF TESTING
	}, []);

	useEffect(() => {
		async function getAllNonAlcDrinks() {
			const response = await fetchAllNonAlcDrinks();

			setNonAlcDrinks(response.drinks);
		}
		getAllNonAlcDrinks();
	}, []);
	//console.log("All nonAlcDrinks in API", nonAlcDrinks);

	useEffect(() => {
		console.log("ingredientName in UE", ingredientName);
		// setIngredName(ingredientName);

		console.log("ingredNamein UE", ingredName);
		setTimeout(1000);
		async function getCocktailsByIngredient() {
			const response = await fetchCocktailsByIngredient(ingredName);
			// console.log("all bourbon drinks in API", response.drinks);
			setByIngredient(response.drinks);
		}
		getCocktailsByIngredient();
		console.log("byIngredient after useEffect", byIngredient);
	}, [ingredName]);

	//Make an array of idDrink values from all NonAlc
	//Make an array of idDrink values from Milk
	//Compare those arratys to see which nonAlcs have Milk

	const nonAlcArray = [];

	//console.log("nonAlcArray ", nonAlcArray);

	const ingredientDrinksAPI = [];
	const NonAlcIngredientArray = [];
	useEffect(() => {
		nonAlcDrinks.map((nonAlcDrink) => {
			nonAlcArray.push(nonAlcDrink.idDrink);
		});
		byIngredient.map((ingredientDrink) => {
			ingredientDrinksAPI.push(ingredientDrink.idDrink);
		});

		for (let i = 0; i <= nonAlcArray.length; i++) {
			if (ingredientDrinksAPI.includes(nonAlcArray[i])) {
				NonAlcIngredientArray.push(nonAlcArray[i]);
			}
		}
		// console.log("ingredientDrinkAPI", ingredientDrinksAPI);
	}, [byIngredient, nonAlcArray]);

	//console.log("NonAlcIngredientArray", NonAlcIngredientArray);

	//Make an array of idDrink values from all Alc
	//Use the ingredient array we already made
	//Compare those arrays to see which Alcs have Milk

	const alcArray = [];
	const alcIngredientArray = [];
	useEffect(() => {
		alcDrinks.map((alcDrink) => {
			alcArray.push(alcDrink.idDrink);
			//strips down to [id numbers of alc drinks]
		});
		// console.log("alcArray", alcArray);
		byIngredient.map((ingredientDrink) => {
			ingredientDrinksAPI.push(ingredientDrink.idDrink);
			//strips down to [id numbers of drinks w/ ingredient]
		});
		for (let i = 0; i <= alcArray.length; i++) {
			if (ingredientDrinksAPI.includes(alcArray[i])) {
				alcIngredientArray.push(alcArray[i]);
				//[compares the ids between the two]
			}
		}
		console.log("alcIngredientArray", alcIngredientArray);
		//alcoholic drinks that include the chosen ingredient

		//concat with the nonalc drinks that include the ingredient
	}, [alcDrinks, byIngredient]);

	//concatenate the alcDrinkIngredient and nonAlcDrinkIngredient Arrays
	//conditionally setChosenDrinkId based on whether it's from non or concat array
	useEffect(() => {
		const toggleOnArray = alcIngredientArray.concat(NonAlcIngredientArray);
		console.log("toggleOnArray above if/then", toggleOnArray);
		if (isToggled && alcIngredientArray) {
			setChosenDrinkId(toggleOnArray[0]);
			console.log(
				"we are in the toggled side and here's the array:",
				toggleOnArray
			);
		} else if (!isToggled && NonAlcIngredientArray.length > 0) {
			console.log("nonAlcIngredArray in first else if", NonAlcIngredientArray);
			setChosenDrinkId(NonAlcIngredientArray[0]);
		} else if (!isToggled && NonAlcIngredientArray.length == 0) {
			setChosenDrinkId(12698); //mango lassi ID
		}
	}, [alcIngredientArray, NonAlcIngredientArray, isToggled]);

	useEffect(() => {
		console.log("entering fetch cocktail by id");
		console.log("chosenDrinkId in 163", chosenDrinkId);
		const chosenId = chosenDrinkId;
		console.log("chosenId in the get by id useEffect", chosenId);
		// setTimeout(1000);
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
	}, [chosenDrinkId]);

	console.log("drink to render above return", drinkToRender);
	return (
		<section>
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
			<h1>HELLO</h1>
			{/* {console.log("alcArrayToShow below Hello", alcArrayToShow)} */}
			{drinkToRender && <h1>{drinkToRender.strDrink}</h1>}
			{drinkToRender && <img src={drinkToRender.strDrinkThumb} />}
			{/* {alcArrayToShow ? (
				alcArrayToShow.map((drink) => {
					console.log("mapping");
					return (
						// eslint-disable-next-line react/jsx-key
						<section>
							<p>{drink}</p>
							<DetailsButton drink={drink} />
						</section>
					);
				})
			) : (
				<>
					<h1>OH NO!!!</h1>
				</>
			)} */}
		</section>
	);
}
