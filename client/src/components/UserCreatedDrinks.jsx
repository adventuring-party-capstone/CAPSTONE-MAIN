// this function grabs the user's created drinks
import { fetchUserCreatedDrinks, fetchSingleUser } from "../../fetching/local";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import DetailsButton from "./DetailsButton";
import DeleteUserCreatedDrink from "./DeleteUserCreatedDrink";
import EditUserDrink from "./EditUserCreatedDrink";

export default function UserCreatedDrinks({ userId }) {
	const [createdDrinks, setCreatedDrinks] = useState([]);
	const [searchParam, setSearchParam] = useState("");
	const [isToggled, setIsToggled] = useState(true);
	const [localArray, setLocalArray] = useState([]);
	const [username, setUsername] = useState("");

	// grab user info (get user object by user id)
	useEffect(() => {
		async function getSingleUserProfile() {
			const response = await fetchSingleUser(userId);
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

	// grab user created drinks from local DB
	useEffect(() => {
		async function getUserCreatedDrinks() {
			const response = await fetchUserCreatedDrinks(userId);
			if (response) {
				setCreatedDrinks(response);
			} else {
				console.log(
					"problem getting drinks from fetchUserCreatedDrinks in component"
				);
			}
		}
		getUserCreatedDrinks();
	}, [userId]);

	// local DB array splitting alcoholic/non-alcoholic
	const nonAlcArray = [];
	useEffect(() => {
		createdDrinks.filter((drink) => {
			// filtering alcoholic drinks
			if (drink.alcoholic && isToggled) {
				setLocalArray(createdDrinks);
			} else if (!drink.alcoholic && !isToggled) {
				nonAlcArray.push(drink);
				setLocalArray(nonAlcArray);
			} else if (!isToggled) {
				setLocalArray([]);
			}
		});
		// console.log("local array in use effect ", localArray);
	}, [createdDrinks, isToggled]);

	// search user created drinks
	const drinksToDisplay = searchParam
		? localArray.filter(
				(drink) =>
					drink.drinks_name.toLowerCase().includes(searchParam) ||
					drink.ingredients.toLowerCase().includes(searchParam)
		  )
		: localArray;

	// TOGGLE LOGIC
	function handleSwitch(event) {
		setIsToggled(event.target.checked);
	}

	// Alcohol toggle
	const PinkSwitch = styled(Switch)(({ theme }) => ({
		"& .MuiSwitch-switchBase.Mui-checked": {
			color: pink[600],
			"&:hover": {
				backgroundColor: alpha(
					pink[600],
					theme.palette.action.hoverOpacity
				),
			},
		},
		"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
			backgroundColor: pink[600],
		},
	}));

	// converts string to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	return (
		<section>
			<br />
			<h1>{titleCase(username)}'s Created Drinks</h1>
			<div id="created-drinks-container">
				<FormGroup>
					<FormControlLabel
						control={
							<PinkSwitch
								checked={isToggled}
								onChange={(event) => handleSwitch(event)}
							/>
						}
						label={
							isToggled
								? "Click to hide alcoholic drinks"
								: "Click to show both alcoholic and nonalcoholic drinks"
						}
					/>
				</FormGroup>
				<label>
					Search:{" "}
					<input
						id="formInput"
						className="inputField"
						type="text"
						placeholder="Search created drinks"
						onChange={(e) =>
							setSearchParam(e.target.value.toLowerCase())
						}
					/>
				</label>
				<p>🍸 Drink Contains Alcohol</p>

				{/* flip card */}

				<div id="created-drinks-gallery">
					{drinksToDisplay.map((drink) => {
						const localDrinkId = drink.drinks_id;
						return (
							<div key={drink.drinks_id} id="flip-card">
								<div id="flip-card-inner">
									<div id="flip-card-front">
										<h3>
											{drink.alcoholic == true ? (
												<h3>
													{" "}
													🍸
													{drink.drinks_name}
												</h3>
											) : (
												<h3> {drink.drinks_name}</h3>
											)}
										</h3>
										<img
											src={drink.image}
											// onerror="this.onerror=null;this.src='http://example.com/existent-image.jpg';"
											alt={drink.drinks_name}
											id="images"
										/>
									</div>

									<div id="flip-card-back">
										<div id="flip-card-buttons">
											<DetailsButton
												drinkId={localDrinkId}
											/>
											<EditUserDrink
												drinkId={localDrinkId}
											/>
											<DeleteUserCreatedDrink
												drinks_id={localDrinkId}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
