import React, { useState } from "react";
import { createDrink } from "../../fetching/local";
import { useNavigate } from "react-router-dom";
import { Input, Select, MenuItem } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import MuiAlert from "@mui/material/Alert";

import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

function SlideTransition(props) {
	return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
	return <Grow {...props} />;
}

export default function CreateNewDrink({ token, userId, dark }) {
	const [drinksName, setDrinksName] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [recipe, setRecipe] = useState("");
	const [image, setImage] = useState("");
	const [glass, setGlass] = useState("");
	const [alcoholic, setAlcoholic] = useState("");
	const [state, setState] = React.useState({
		open: false,
		Transition: Fade,
	});

	const navigate = useNavigate();

	if (!token) {
		navigate("/login");
	}

	const handleClick = (Transition) => () => {
		setState({
			open: true,
			Transition,
		});
	};

	const handleClose = () => {
		setState({
			...state,
			open: false,
		});
	};

	// console.log("userId in createnewdrink", userId);
	const userIdCND = Number(userId);
	// console.log("userIdCND", userIdCND);

	async function handleSubmit(e) {
		try {
			e.preventDefault();
			console.log("..entering create drink handle submit");
			const createDrinkResult = await createDrink(
				null,
				drinksName,
				ingredients,
				recipe,
				image,
				null,
				alcoholic,
				userIdCND
			);
			if (createDrinkResult) {
				myFunction();
			}
			console.log("API Data", createDrinkResult);
		} catch (error) {
			console.error(error);
		}
	}

	const handleChange = (e) => {
		setAlcoholic(e.target.value);
	};

	function myFunction() {
		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function () {
			x.className = x.className.replace("show", "");
		}, 3000);
	}

	return (
		<section>
			<div id="snackbar">Congrats! You created a drink!</div>
			<div className="formGroup">
				<h1>Create Your Own Drink</h1>
				<br />
				<h3>
					<span className="req">*</span> - Required field
				</h3>
				<form id="drink-form">
					<span className="req">*</span>
					<input
						id="formInput"
						className="inputField"
						value={drinksName}
						type="text"
						name="title"
						placeholder="Drink name*"
						required
						onChange={(e) => setDrinksName(e.target.value)}
					/>
					<br />
					<input
						id="formInput"
						className="inputField"
						value={image}
						required
						type="text"
						name="title"
						placeholder="Image URL"
						onChange={(e) => setImage(e.target.value)}
					/>
					<br />
					<span className="req">*</span>
					<textarea
						cols={50}
						rows={10}
						id="formInput"
						className="inputField"
						value={ingredients}
						type="text"
						name="ingredients"
						placeholder="Ingredients*"
						required
						onChange={(e) => setIngredients(e.target.value)}
					/>
					<br />
					<span className="req">*</span>
					<textarea
						cols={50}
						rows={10}
						id="formInput"
						className="inputField"
						value={recipe}
						type="text"
						name="recipe"
						placeholder="Instructions*"
						required
						onChange={(e) => setRecipe(e.target.value)}
					/>
					<br />
					<br />
					<div
						className="inputField"
						value={alcoholic}
						type="text"
						name="alcoholic"
						placeholder="alcoholic"
						onChange={handleChange}
					>
						<h1>Alcoholic?</h1>
						<div>
							<span className="req">*</span>
							<select
								name="alcoholic"
								id="formInput"
								value={alcoholic}
								onClick={handleChange}
							>
								<option value={false}>No</option>
								<option value={true}>Yes</option>
							</select>
						</div>
					</div>
					<br />
					<br />
					<button
						onClick={(e) => {
							{
								handleSubmit(e);
							}
						}}
						id="pink-button"
					>
						Submit
					</button>
				</form>
				<div>
					<Snackbar
						open={state.open}
						onClose={handleClose}
						TransitionComponent={state.Transition}
						message="Congrats! You created a drink!"
						key={state.Transition.name}
					/>
				</div>
			</div>
			{dark ? (
				<div>
					<div id="video-home-dark-mixologist">
						<h1></h1>
						<video autoPlay loop muted style={{ minWidth: "100%" }}>
							<source src={DarkMode} type="video/mp4"></source>
						</video>
					</div>
					<div id="video-home-dark-mixologist2">
						<h1></h1>
						<video autoPlay loop muted style={{ minWidth: "100%" }}>
							<source src={DarkMode} type="video/mp4"></source>
						</video>
					</div>
				</div>
			) : (
				<div id="video-home">
					<video autoPlay loop muted style={{ minWidth: "100%" }}>
						<source src={LightMode} type="video/mp4"></source>
					</video>
				</div>
			)}{" "}
		</section>
	);
}
