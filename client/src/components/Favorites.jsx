// this component renders drink favorites

import { useEffect, useState } from "react";
import { fetchAllUsersDrinks, fetchAllDrinks } from "../../fetching/local";

export default function Favorites() {
	const [usersFavorites, setUsersFavorites] = useState([]);
	const [drinks, setDrinks] = useState([]);

	// grabbing all users' favorites from users_drinks junction table
	useEffect(() => {
		async function getAllUsersDrinks() {
			const response = await fetchAllUsersDrinks();
			console.log("response inside get all users drinks: ", response);

			try {
				if (response) {
					setUsersFavorites(response);
				}
			} catch (error) {
				console.error("can't get all favorites", error);
			}
		}
		getAllUsersDrinks();
	}, []);

	// grab all drinks from drinks table
	useEffect(() => {
		async function getAllDrinks() {
			const response = await fetchAllDrinks();
			console.log("response inside get all drinks ", response);

			try {
				if (response) {
					setDrinks(response);
				}
			} catch (error) {
				console.error("can't get all drinks", error);
			}
		}
		getAllDrinks();
	}, []);

	// mapping through drinks to match with the ones that are favorited
	const usersFavoriteDrinks = [];
	drinks.filter((drink) => {
		usersFavorites.map((userFavorite) => {
			userFavorite.drinks_id;
		});
	});

	// map through drinks array
	// also map through users favorites at the same time?
	// for each drink, if drinks.drinks_id == usersFavorites.drinks_id
	// push drinks.drink into usersFavoritesDrinks (currently an empty array);

	return (
		<section>
			<div>
				<h1>FAVORITES</h1>
			</div>
			<div>
				{usersFavorites.map((favorite) => {
					return (
						<div key={favorite.users_drinks_id}>
							<p>{favorite.drinks_id}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
