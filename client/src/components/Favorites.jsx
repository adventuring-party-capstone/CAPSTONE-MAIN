// this component renders drink favorites

import { useEffect, useState } from "react";
import {
	fetchUsersDrinksByUserId,
	fetchAllDrinks,
	fetchSingleUser,
} from "../../fetching/local";
import { fetchAllAlcDrinks } from "../../fetching/cocktaildb";
import { fetchAllNonAlcDrinks } from "../../fetching/cocktaildb";
import DeleteFavorite from "./DeleteFavorite";
import DetailsButton from "./DetailsButton";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";


export default function Favorites({ token, userId }) {
	const [usersFavorites, setUsersFavorites] = useState([]);
	const [drinks, setDrinks] = useState([]);
	const [allAlcDrinks, setAllAlcDrinks] = useState([]);
	const [allNonAlcDrinks, setAllNonAlcDrinks] = useState([]);
	const [username, setUsername] = useState("");
	const [searchParam, setSearchParam] = useState("");
	const [localArray, setLocalArray] = useState([]);
	const [APIArrayBig, setAPIArrayBig] = useState([]);
	const [combinedArray, setCombinedArray] = useState([]);
	const [isToggled, setIsToggled] = useState(false);

	// console.log("userId in favorites", userId);

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
		console.log("drinks in GAD", drinks);
	}, []);

	// getting all alc drinks from Cocktail DB
	useEffect(() => {
		async function getAllAlcDrinks() {
			const drinks = await fetchAllAlcDrinks();
			console.log("alc drinks", drinks);
			//can also be a try/catch for more detailed error reporting
			if (drinks) {
				setAllAlcDrinks(drinks.drinks);
			} else {
				console.log("error fetching alcoholic drinks");
			}
		}
		getAllAlcDrinks();
	}, []);

	// getting all non alc drinks from Cocktail DB
	useEffect(() => {
		async function getAllNonAlcDrinks() {
			const drinks = await fetchAllNonAlcDrinks();
			console.log("non alc drinks", drinks);
			//can also be a try/catch for more detailed error reporting
			if (drinks) {
				setAllNonAlcDrinks(drinks.drinks);
			} else {
				console.log("error fetching non-alcoholic drinks");
			}
		}
		getAllNonAlcDrinks();
	}, []);

	// combining API alcoholic & nonalcoholic to get all API drinks
	useEffect(() => {
		console.log("allAlcDrinks in UE", allAlcDrinks);
		console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
		const twoArrays = allAlcDrinks.concat(allNonAlcDrinks);
		console.log("twoArrays", twoArrays);
		setCombinedArray(twoArrays);
		// if (allAlcDrinks.length > 0 && allNonAlcDrinks.length > 0) {
		// } else {
		// 	console.log("can't combine arrays");
		// }
		// console.log("all alc drinks in UE", allAlcDrinks);
	}, [allAlcDrinks, allNonAlcDrinks]);

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
	}, [userId]);

	// grab user info (get user object by user id)
	useEffect(() => {
		async function getSingleUserProfile() {
			console.log("entering GSUP");
			const response = await fetchSingleUser(userId);
			console.log("response in GSUP", response);

			try {
				if (response) {
					setUsername(response.username);
				}
			} catch (error) {
				console.error("can't get user info", error);
			}
		}
		getSingleUserProfile();
	}, [userId]);

	// mapping through drinks to match with the ones that are favorited
	const usersFavoriteDrinksId = [];
	const usersFavoritesDrinksIdAPI = [];

	usersFavorites.map((userFavorite) => {
		userFavorite.drinks_id &&
			usersFavoriteDrinksId.push(userFavorite.drinks_id);
	});

	usersFavorites.map((userFavorite) => {
		userFavorite.api_drinks_id &&
			usersFavoritesDrinksIdAPI.push(userFavorite.api_drinks_id);
	});

	console.log("usersFavoritesDrinksIdAPI", usersFavoritesDrinksIdAPI)

	// map through usersFavorites
	// push usersFavorites.drinks_id into usersFavoriteDrinksId array
	// in the return statement, then map over drinks
	// if the drinks.drinks_id is inside usersFavoriteDrinksId
	// then display drink.drinks_name etc

	// TOGGLE LOGIC
	function handleSwitch(event) {
		setIsToggled(event.target.checked);
	}

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

	// local DB array splitting alcoholic/non-alcoholic
	const nonAlcArray = [];
	useEffect(() => {
		drinks.filter((drink) => {
			// filtering alcoholic drinks
			if (drink.alcoholic && isToggled) {
				setLocalArray(drinks);
			} else if (!drink.alcoholic && !isToggled) {
				nonAlcArray.push(drink);
				console.log("nonAlcArray", nonAlcArray);
				setLocalArray(nonAlcArray);
			}
		});
		console.log("local array in use effect ", localArray);
	}, [drinks, isToggled]);

	// API array based on the toggle behavior
	const APIArray = [];
	useEffect(() => {
		console.log("combinedArray in UE", combinedArray);
		console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
		// console.log("APIArray in UE", APIArray);
		// setAPIArray(nonAlcArray);
		if (isToggled) {
			APIArray.push(combinedArray);
			setAPIArrayBig(APIArray[0]);
			console.log("APIArray if isToggled", APIArray);
		} else if (!isToggled) {
			APIArray.push(allNonAlcDrinks);
			setAPIArrayBig(APIArray[0]);
			console.log("APIArray if !isToggled", APIArray);
		}
	}, [combinedArray, isToggled, allNonAlcDrinks]);

	const drinksToDisplay = searchParam
		? localArray.filter(
			(drink) =>
				drink.drinks_name.toLowerCase().includes(searchParam) ||
				drink.ingredients.toLowerCase().includes(searchParam)
		)
		: localArray;

	const drinksToDisplayAPI = searchParam
		? APIArrayBig.filter((drink) =>
			drink.strDrink.toLowerCase().includes(searchParam)
		)
		: APIArrayBig;

	return (
		// remember to Number() the userId we are getting from localStorage
		<section>
			{token && (
				<div>
					<div>
						<h1>{username}'s FAVORITES</h1>
					</div>
					<FormGroup>
						<FormControlLabel
							control={
								<PinkSwitch
									checked={isToggled}
									onChange={(event) => handleSwitch(event)}
								/>
							}
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

					<div id="favorites-gallery">
						{console.log("drinksToDisplayAPI", drinksToDisplayAPI)}
						{drinksToDisplay
							.filter((drink) =>
								usersFavoriteDrinksId.includes(drink.drinks_id)
							)
							.map((drink) => {
								const localDrinkId = drink.drinks_id;
								return (
									<div key={drink.drinks_id} id="drink-card">
										<div id="flip-card">
											<div id="flip-card-inner">
												<div id="flip-card-front">
													<p>{drink.drinks_name}</p>
													<img
														src={drink.image}
														alt={drink.drinks_name}
														id="images"
													/>
												</div>

												<div id="flip-card-back">
													<DetailsButton drinkId={localDrinkId} />
													<DeleteFavorite drinks_id={drink.drinks_id} />
												</div>
											</div>
										</div>
									</div>


								);
							})}
						{drinksToDisplayAPI
							.filter((drink) =>
								usersFavoritesDrinksIdAPI.includes(Number(drink.idDrink))
							)
							.map((drink) => {
								const APIDrinkId = drink.idDrink;
								return (
									<div key={drink.idDrink} id="drink-card">
										<div id="flip-card">
											<div id="flip-card-inner">
												<div id="flip-card-front">
													<h2>{drink.strDrink}</h2>
													<img src={drink.strDrinkThumb} alt={drink.strDrink} id="images" />
												</div>
												<div id="flip-card-back">
													<div><DetailsButton drinkId={APIDrinkId} /></div>
													<DeleteFavorite api_drinks_id={drink.idDrink} />
												</div>
											</div>
										</div>
									</div>
								);
							})}

					</div>
				</div >
			)
			}
		</section >
	);
}
