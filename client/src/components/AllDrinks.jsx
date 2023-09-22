import { useState, useEffect } from "react";
import { fetchAllDrinks } from "../../fetching/local";

export default function AllDrinks() {
	const [allDrinks, setAllDrinks] = useState([]);

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

	return (
		<section id="all-drinks-container">
			<h1>All Dranks</h1>
			<div id="all-drinks-gallery">
				{allDrinks.map((drink) => {
					return (
						<div key={drink.drinks_id}>
							<h2>{drink.drinks_name}</h2>
							<img src={drink.image} alt={drink.drinks_name} id="images" />
							<br />
						</div>
					);
				})}
			</div>
		</section>
	);
}
