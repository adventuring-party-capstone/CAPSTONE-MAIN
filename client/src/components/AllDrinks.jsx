import { useState, useEffect } from "react";
import { fetchAllDrinks } from "../../fetching/local";
import FavoriteButton from "./FavoriteButton";

export default function AllDrinks({ token, userId }) {
	const [allDrinks, setAllDrinks] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllDrinks() {
			const drinks = await fetchAllDrinks();
			console.log("drinks ", drinks);
			//can also be a try/catch for more detailed error reporting
			if (drinks) {
				setAllDrinks(drinks);

				return drinks;
			} else {
				console.log("error fetching drinks");
			}
		}
		getAllDrinks();
	}, []);

	const drinksToDisplay = searchParam
		? allDrinks.filter(
				(drink) =>
					drink.drinks_name.toLowerCase().includes(searchParam) ||
					drink.ingredients.toLowerCase().includes(searchParam)
		  )
		: allDrinks;

	return (
		<section id="all-drinks-container">
			<h1>All Dranks</h1>
			<label>
				Search:{" "}
				<input
					id="search"
					className="inputField"
					type="text"
					placeholder="Search"
					onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
				/>
			</label>
			<div id="all-drinks-gallery">
				{drinksToDisplay.map((drink) => {
					return (
						<div key={drink.drinks_id}>
							<h2>{drink.drinks_name}</h2>
							<img src={drink.image} alt={drink.drinks_name} id="images" />
							<br />
							{token && (
								<FavoriteButton drinkId={drink.drinks_id} userId={userId} />
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
