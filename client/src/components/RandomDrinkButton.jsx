import { useState, useEffect } from "react";
import { fetchRandomDrink } from "../../fetching/randomdrink";
import DetailsButton from "./DetailsButton";
import FavoriteButton from "./FavoriteButton";
import { fetchAllAlcDrinks } from "../../fetching/cocktaildb";
import SingleDrinkDetails from "./SingleDrinkDetails";

import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

export default function RandomDrinkButton({ userId, dark }) {
	const [randomDrink, setRandomDrink] = useState(null);
	const [alcArray, setAlcArray] = useState([]);
	const [alcIds, setAlcIds] = useState([]);

	const getRandomDrink = async () => {
		const response = await fetchRandomDrink();
		console.log(
			"response from fetchRandomDrink in getRandomDrink",
			response
		);
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
		<section>
			<h1>Drink Randomizer</h1>
			<h3>Click to get a random drink card!</h3>
			<button onClick={handleClick} className="glow-on-hover-home">
				Random Drink!
			</button>
			<div className="Random-Button">
				{randomDrink ? (
					<div id="random-drink-container">
						<h3>🍸= Drink Contains Alcohol</h3>
						<div id="flip-card">
							<div id="snackbar">
								<h1>Added to favorites</h1>
							</div>
							<div id="flip-card-inner">
								<div id="flip-card-front">
									<div id="name section">
										{alcIds.includes(
											randomDrink.idDrink
										) ? (
											<h3>
												🍸
												{randomDrink.strDrink}
											</h3>
										) : (
											<h3>{randomDrink.strDrink}</h3>
										)}
									</div>
									{randomDrink && (
										<img
											src={randomDrink.strDrinkThumb}
											id="images"
										/>
									)}
								</div>
								<div id="flip-card-back">
									{randomDrink && (
										<h3>{randomDrink.strDrink}</h3>
									)}
									{randomDrink.strDrinkThumb && (
										<DetailsButton
											drinkId={randomDrink.idDrink}
										/>
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
			{dark ? (
				<div id="video-home-dark">
					<h1></h1>
					<video autoPlay loop muted style={{ minWidth: "100%" }}>
						<source src={DarkMode} type="video/mp4"></source>
					</video>
				</div>
			) : (
				<div id="video-home">
					<video autoPlay loop muted style={{ minWidth: "100%" }}>
						<source src={LightMode} type="video/mp4"></source>
					</video>
				</div>
			)}
		</section>
	);
}
