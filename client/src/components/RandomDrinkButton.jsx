import { useState, useEffect } from "react";
import { fetchRandomDrink } from "../../fetching/randomdrink";
import DetailsButton from "./DetailsButton";
import FavoriteButton from "./FavoriteButton";

export default function RandomDrinkButton({ userId }) {
	const [randomDrink, setRandomDrink] = useState([]);
	const getRandomDrink = async () => {
		const response = await fetchRandomDrink();
		console.log("response from fetchRandomDrink in getRandomDrink", response);
		//   const result = await response.json();
		setRandomDrink(response.drinks[0]);
	};

	console.log("userId inside random drink button", userId);

	function handleClick() {
		getRandomDrink();
	}
	//   KEEP THIS
	console.log("is this from my random drink component?", randomDrink);
	return (
		<>
			<div className="random">{randomDrink.strId}</div>
			<button onClick={handleClick}>Random Drink! :3</button>
			<div className="Random-Button">
				{randomDrink ? (
					<div>
						{randomDrink && <img src={randomDrink.strDrinkThumb} />}
						{randomDrink && <h1>{randomDrink.strDrink}</h1>}
						{randomDrink.strDrinkThumb && (
							<DetailsButton drinkId={randomDrink.idDrink} />
						)}
						{randomDrink.strDrinkThumb && (
							<FavoriteButton
								userId={userId}
								api_drinks_id={randomDrink.idDrink}
							/>
						)}
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
}
