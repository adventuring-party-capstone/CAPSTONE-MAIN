// this component renders drink favorites

import { useEffect, useState } from "react";
import { fetchUsersDrinksByUserId, fetchAllDrinks } from "../../fetching/local";

export default function Favorites({ token, userId }) {
	const [usersFavorites, setUsersFavorites] = useState([]);
	const [drinks, setDrinks] = useState([]);

	// grabbing logged in users' favorites from users_drinks junction table
	useEffect(() => {
		async function getSingleUserDrinks() {
			console.log("userId in get single user drinks ", userId);
			const response = await fetchUsersDrinksByUserId(userId);
			console.log("response inside get single user's drinks: ", response);

			try {
				if (response) {
					setUsersFavorites(response);
				}
			} catch (error) {
				console.error("can't get single user's favorites", error);
			}
		}
		getSingleUserDrinks();
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
	const usersFavoriteDrinksId = [];

	usersFavorites.map((userFavorite) => {
		usersFavoriteDrinksId.push(userFavorite.drinks_id);
	});

	// map through usersFavorites
	// push usersFavorites.drinks_id into usersFavoriteDrinksId array
	// in the return statement, then map over drinks
	// if the drinks.drinks_id is inside usersFavoriteDrinksId
	// then display drink.drinks_name etc

	return (
		// remember to Number() the userId we are getting from localStorage
		<section>
			{token && (
				<div>
					<div>
						<h1>FAVORITES</h1>
					</div>
					<div>
						{drinks
							.filter((drink) =>
								usersFavoriteDrinksId.includes(drink.drinks_id)
							)
							.map((drink) => {
								return (
									<div key={drink.drinks_id}>
										<p>{drink.drinks_name}</p>
										<img
											src={drink.image}
											alt={drink.drinks_name}
											id="images"
										/>
									</div>
								);
							})}
					</div>
				</div>
			)}
		</section>
	);
}
