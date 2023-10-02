import { useLoaderData } from "react-router-dom";
import { fetchAllDrinks } from "../../fetching/local";
import { useState } from "react";

export default function SpotifyRefactor() {
	const [drinks, setDrinks] = useState([]);

	function loader() {
		const localDrinks = fetchAllDrinks();
		setDrinks(localDrinks);
	}

	console.log(loader());
	return <>{drinks && drinks.map((drink) => drink.drinks_name)}</>;
}
