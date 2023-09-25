import { useState, useEffect, useParams } from "react";
import {
	fetchAllDrinks,
	fetchAllGenresIngredients,
	fetchAllIngredients,
	fetchAllGenres,
} from "../../fetching/local";
import FavoriteButton from "./FavoriteButton";

export default function DrinkCard({ musicChoice }) {
	const [drinks, setDrinks] = useState([]);
	const [genres, setGenres] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [junctionGenresIngredients, setJunctionGenresIngredients] = useState(
		[]
	);

	const userId = 3;

	// get all drinks
	useEffect(() => {
		async function getAllDrinks() {
			const response = await fetchAllDrinks();
			console.log(response);
			setDrinks(response);
			// console.log("ALL DRINKS", response);
		}
		getAllDrinks();
	}, []);

	// get all genres
	useEffect(() => {
		async function getAllGenres() {
			const response = await fetchAllGenres();
			console.log(response);
			setGenres(response);
			console.log("ALL GENRES", response);
		}
		getAllGenres();
	}, []);
	// console.log("ALL GENRES", genres);

	// get all genres_ingredients
	useEffect(() => {
		async function getAllGenresIngredients() {
			const junctionGenresIngredients = await fetchAllGenresIngredients();
			setJunctionGenresIngredients(junctionGenresIngredients);
			// console.log("junctionGenresIngredients", junctionGenresIngredients);
		}
		getAllGenresIngredients();
	}, []);

	// get all ingredients
	useEffect(() => {
		async function getAllIngredients() {
			const ingredients = await fetchAllIngredients();
			setIngredients(ingredients);
			// console.log("ingredients", ingredients);
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
		console.log("LOGGING FILTERED INGREDIENTS...");
		if (junctionGenreIngredient.genres_id == genreId[0]) {
			// getting the ingredients_ids associated with genres_id
			filtered_ingredients_ids.push(junctionGenreIngredient.ingredients_id);
			console.log("FILTERED INGREDIENTS", filtered_ingredients_ids);

			// getting the ingredients_name associated with ingredients_id
			ingredients.map((ingredient) => {
				if (filtered_ingredients_ids.includes(ingredient.ingredients_id)) {
					filtered_ingredients_names.push(ingredient.ingredients_name);
					console.log("FILTERED INGREDIENTS NAMES", filtered_ingredients_names);
				}
			});
		}
	});
	const handleSubmit = async (event) => {
		event.preventDefault();
		let drinks_id = drinkId
		console.log("drinks id", drinks_id)
	}

	return (
		<>
			<div id="drink-card">
				<h1>DRINK CARD</h1>
				<h1>INGREDIENT {filtered_ingredients_names}</h1>
				{drinks
					.filter((drink) =>
						filtered_ingredients_names.includes(drink.ingredients)
					)
					.map((drink) => {
						const drinkId = drink.drinks_id
						return (
							<>
								<div id="each-drink" key={drink.drinks_id}>
									<h3>{drink.drinks_name}</h3>
									<img src={drink.image}></img>
									<FavoriteButton drinkId={drinkId} userId={userId}/>
								</div>
							</>
						);
					})}
			</div>
		</>
	);
}
