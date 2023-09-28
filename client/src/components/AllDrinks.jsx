import FavoriteButton from "./FavoriteButton";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { fetchAllDrinks } from "../../fetching/local";

export default function AllDrinks({ token, userId }) {
	const [allDrinks, setAllDrinks] = useState([]);
	const [searchParam, setSearchParam] = useState("");
	const [isToggled, setIsToggled] = useState(false);

	// Alcohol toggle
	const PinkSwitch = styled(Switch)(({ theme }) => ({
		"& .MuiSwitch-switchBase.Mui-checked": {
			color: pink[600],
			"&:hover": {
				backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
			},
		},
		"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
			backgroundColor: pink[600],
		},
	}));

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

	function handleSwitch() {
		setIsToggled(!false);
	}

	// local DB array splitting alcoholic/non-alcoholic
	// const alcArray = [];
	// const nonAlcArray = [];
	// useEffect(() => {
	// 	allDrinks.filter((drink) => {
	// 		// filtering alcoholic drinks
	// 		if (drink.alcoholic && isToggled) {
	// 			alcArray.push(allDrinks);
	// 		} else if (!drink.alcoholic && !isToggled) {
	// 			nonAlcArray.push(drink);
	// 		}
	// 	});
	// 	console.log("alcArray", alcArray);
	// 	console.log("nonAlcArray", nonAlcArray);
	// }, [isToggled]);
	// const localArray = nonAlcArray.concat(alcArray);

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
			<FormGroup>
				<FormControlLabel
					control={<PinkSwitch onClick={handleSwitch} />}
					label="Show alcoholic drinks"
				/>
			</FormGroup>
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
