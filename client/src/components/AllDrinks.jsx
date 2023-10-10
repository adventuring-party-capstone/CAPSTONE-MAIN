import FavoriteButton from "./FavoriteButton";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { fetchAllDrinks } from "../../fetching/local";
import { fetchAllAlcDrinks } from "../../fetching/cocktaildb";
import { fetchAllNonAlcDrinks } from "../../fetching/cocktaildb";

import Box from "@mui/material/Box";
import { Pagination, Typography } from "@mui/material";

const List = styled("ul")({
	listStyle: "none",
	padding: 0,
	margin: 0,
	display: "flex",
});

import DetailsButton from "./DetailsButton";

export default function AllDrinks({ token, userId }) {
	const [allDrinks, setAllDrinks] = useState([]);
	const [allAlcDrinks, setAllAlcDrinks] = useState([]);
	const [allNonAlcDrinks, setAllNonAlcDrinks] = useState([]);
	const [searchParam, setSearchParam] = useState("");
	const [localArray, setLocalArray] = useState([]);
	const [APIArrayBig, setAPIArrayBig] = useState([]);
	const [combinedArray, setCombinedArray] = useState([]);
	const [isToggled, setIsToggled] = useState(false);
	const [alcIds, setAlcIds] = useState([]);

	// Pagination states
	const [page, setPage] = useState(1);
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(18);
	const [totalPages, setTotalPages] = useState(1);
	const [APIArrayBigToDisplay, setAPIArrayBigToDisplay] = useState([]);
	const perPage = 18; // 18 items per page

	useEffect(() => {
		async function getAllDrinks() {
			const drinks = await fetchAllDrinks();
			//    console.log("drinks ", drinks);
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

	// getting all alc drinks from Cocktail DB
	useEffect(() => {
		async function getAllAlcDrinks() {
			const drinks = await fetchAllAlcDrinks();
			//    console.log("alc drinks", drinks);
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
			//    console.log("non alc drinks", drinks);
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
		// console.log("allAlcDrinks in UE", allAlcDrinks);
		// console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
		const twoArrays = allAlcDrinks.concat(allNonAlcDrinks);
		//   console.log("twoArrays", twoArrays);
		setCombinedArray(twoArrays);
	}, [allAlcDrinks, allNonAlcDrinks]);

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
		allDrinks.filter((drink) => {
			// filtering alcoholic drinks
			if (drink.alcoholic && isToggled) {
				setLocalArray(allDrinks);
			} else if (!drink.alcoholic && !isToggled) {
				nonAlcArray.push(drink);
				// console.log("nonAlcArray", nonAlcArray);
				setLocalArray(nonAlcArray);
			}
		});
	}, [allDrinks, isToggled]);

	// API array based on the toggle behavior
	const APIArray = [];
	useEffect(() => {
		//   console.log("combinedArray in UE", combinedArray);
		//   console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
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

		// set first render array
		setAPIArrayBigToDisplay(APIArray[0].slice(0, perPage));
		// set total pages for pagination in return
		setTotalPages(Math.ceil(APIArray[0].length / perPage));
	}, [combinedArray, isToggled, allNonAlcDrinks]);

	// console.log("all alc drinks line 134", allAlcDrinks);

	//pushing the ids from alcoholic drinks into an array
	const alcIdArray = [];
	useEffect(() => {
		for (let i = 0; i < allAlcDrinks.length; i++) {
			alcIdArray.push(allAlcDrinks[i].idDrink);
		}
		// console.log("alcIdArray inside UE", alcIdArray);
		setAlcIds(alcIdArray);
	}, [allAlcDrinks]);

	const drinksToDisplay = searchParam
		? localArray.filter(
				(drink) =>
					drink.drinks_name.toLowerCase().includes(searchParam) ||
					drink.ingredients.toLowerCase().includes(searchParam)
		  )
		: localArray;

	const drinksToDisplayAPI = searchParam
		? APIArrayBigToDisplay.filter((drink) =>
				drink.strDrink.toLowerCase().includes(searchParam)
		  )
		: APIArrayBigToDisplay;

	// console.log("allAlcDrinks above return", allAlcDrinks);
	// console.log("drinks to display api", drinksToDisplayAPI);

	// HANDLES PAGINATION BEHAVIOR FOR LAZY LOADING
	const handleChange = (event, pageNum) => {
		setPage(pageNum);
		// console.log("page", pageNum);
		// console.log("totalPages", totalPages);

		const totalLength = APIArrayBig.length;
		// console.log("totalLength", totalLength);
		if (pageNum === 1) {
			// if page 1 is clicked
			let currentPageArray = APIArrayBig.slice(0, perPage);
			setAPIArrayBigToDisplay(currentPageArray);
		} else if (
			// not close to the end of array and not page 1
			pageNum < totalPages &&
			pageNum !== 1
		) {
			let currentPageArray = APIArrayBig.slice(
				(pageNum - 1) * perPage,
				pageNum * perPage
			);
			setAPIArrayBigToDisplay(currentPageArray);
		} else if (pageNum === totalPages) {
			// behavior for the last page
			let currentPageArray = APIArrayBig.slice(
				(pageNum - 1) * perPage,
				totalLength
			);
			setAPIArrayBigToDisplay(currentPageArray); // allows search to still work
		}
	};

	return (
		<>
			<section id="all-drinks-container">
				<h1>All Drinks</h1>
				<p>🍸 Drink Contains Alcohol</p>
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
				<div id="pagination">
					<Pagination
						count={totalPages}
						page={page}
						onChange={handleChange}
						color="primary"
					/>
				</div>
				<div id="all-drinks-gallery">
					{drinksToDisplay.map((drink) => {
						const localDrinkId = drink.drinks_id;
						return (
							<div id="flip-card" key={drink.drinks_id}>
								<div id="flip-card-inner">
									<div id="flip-card-front">
										<p>
											{drink.alcoholic == true ? (
												<text>
													🍸
													{drink.drinks_name}
												</text>
											) : (
												<text>{drink.drinks_name}</text>
											)}
											{/* conditionally render edit button if user id is == the creator's id*/}
										</p>
										<img
											src={drink.image}
											alt={drink.drinks_name}
											id="images"
										/>
									</div>
									<div id="flip-card-back">
										<h1>{drink.drinks_name}</h1>
										{token && (
											<FavoriteButton
												drinkId={drink.drinks_id}
												userId={userId}
											/>
										)}
										<DetailsButton drinkId={localDrinkId} />
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div id="all-drinks-gallery">
					{drinksToDisplayAPI.map((drink) => {
						const APIDrinkId = drink.idDrink;
						return (
							<div id="flip-card" key={drink.idDrink}>
								<div id="flip-card-inner">
									<div id="flip-card-front">
										<div id="name section">
											{alcIds.includes(drink.idDrink) ? (
												<p>
													🍸
													{drink.strDrink}
												</p>
											) : (
												<p>{drink.strDrink}</p>
											)}
										</div>

										<img
											src={drink.strDrinkThumb}
											alt={drink.strDrink}
											id="images"
										/>
									</div>
									<div id="flip-card-back">
										<h1>{drink.strDrink}</h1>
										{token && (
											<FavoriteButton
												api_drinks_id={drink.idDrink}
												userId={userId}
											/>
										)}
										<DetailsButton drinkId={APIDrinkId} />
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div id="pagination">
					<Pagination
						count={totalPages}
						page={page}
						onChange={handleChange}
						color="primary"
					/>
				</div>
			</section>
		</>
	);
}
