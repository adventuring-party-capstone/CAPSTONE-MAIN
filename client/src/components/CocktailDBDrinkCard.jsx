import { useState, useEffect } from "react";
import {
     fetchAllAlcDrinks,
     fetchAllNonAlcDrinks,
     fetchCocktailsByIngredient,
     fetchCocktailById
} from "../../fetching/cocktaildb";

export default function CocktailDBDrinkCard({ ingredientName }) {
	const [alcDrinks, setAlcDrinks] = useState([]);
	const [nonAlcDrinks, setNonAlcDrinks] = useState([]);
	const [byIngredient, setByIngredient] = useState([]);
	// const [ingredName, setIngredName] = useState("");
	const [alcArrayToShow, setAlcArrayToShow] = useState([]);
     const [drinkToRender, setDrinkToRender] = useState(null);

	const ingredName = ingredientName;

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
			// console.log(
			// 	"response.drinks in getAllNonAlcDrinks on CDB Drink Card ",
			// 	response.drinks
			// );
			setNonAlcDrinks(response.drinks);
		}
		getAllNonAlcDrinks();
	}, []);
	//console.log("All nonAlcDrinks in API", nonAlcDrinks);

	//  TEMPORARY HARD-CODED INGREDIENT VARIABLE
	//  const ingredient = "Milk";
	// const ingredient = ingredientName;

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
		});
		// console.log("alcArray", alcArray);
		byIngredient.map((ingredientDrink) => {
			ingredientDrinksAPI.push(ingredientDrink.idDrink);
		});
		for (let i = 0; i <= alcArray.length; i++) {
			if (ingredientDrinksAPI.includes(alcArray[i])) {
				alcIngredientArray.push(alcArray[i]);
				setAlcArrayToShow(alcIngredientArray);
			}
		}
		console.log("alcIngredientArray", alcIngredientArray);
	}, [alcDrinks, byIngredient]);

     setDrinkToRender(alcIngredientArray[0]);
     console.log("drink to render set", drinkToRender);

	return (
		<section>
			<h1>HELLO</h1>
			{console.log("alcArrayToShow below Hello", alcArrayToShow)}
			{alcArrayToShow ? (
				alcArrayToShow.map((drink) => {
					console.log("mapping");
					return (
						// eslint-disable-next-line react/jsx-key
						<section>
							<p>{drink}</p>
						</section>
					);
				})
			) : (
				<>
					<h1>OH NO!!!</h1>
				</>
			)}
		</section>
	);
}
