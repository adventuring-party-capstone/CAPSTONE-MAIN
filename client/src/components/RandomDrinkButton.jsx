import { useState, useEffect } from "react";
import { fetchRandomDrink } from "../../fetching/randomdrink";
import DetailsButton from "./DetailsButton";
import FavoriteButton from "./FavoriteButton";
import { fetchAllAlcDrinks } from "../../fetching/cocktaildb";

export default function RandomDrinkButton({ userId }) {
	const [randomDrink, setRandomDrink] = useState(null);
	const [alcArray, setAlcArray] = useState([]);
	const [alcIds, setAlcIds] = useState([]);

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

	//getting all alcoholic drinks from the api
	useEffect(() => {
		async function getAlcoholicDrinks() {
			const alcDrinks = await fetchAllAlcDrinks();
			console.log("alcDrinks.drinks line 32", alcDrinks.drinks);
			setAlcArray(alcDrinks.drinks);
		}
		getAlcoholicDrinks();
		console.log("alcArray in 35", alcArray);
	}, []);

	//pushing the ids from alcoholic drinks into an array
	const alcIdArray = [];
	useEffect(() => {
		for (let i = 0; i < alcArray.length; i++) {
			alcIdArray.push(alcArray[i].idDrink);
		}
		console.log("alcIdArray inside UE", alcIdArray);
		setAlcIds(alcIdArray);
	}, [alcArray]);

	//   KEEP THIS
	console.log("is this from my random drink component?", randomDrink);
	return (
		<>
			<button onClick={handleClick} id="pink-button">
				Random Drink! :3
			</button>
			<div className="Random-Button">
				{randomDrink ? (
					<div>
						<div id="flip-card">
							<div id="flip-card-inner">
								<div id="flip-card-front">
									<div id="name section">
										{alcIds.includes(randomDrink.idDrink) ? (
											<p>
												🍸
												{randomDrink.strDrink}
											</p>
										) : (
											<p>{randomDrink.strDrink}</p>
										)}
									</div>
									{randomDrink && (
										<img src={randomDrink.strDrinkThumb} id="images" />
									)}
								</div>
								<div id="flip-card-back">
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
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
}
