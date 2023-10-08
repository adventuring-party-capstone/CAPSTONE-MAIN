import React, { useState } from "react";
import { createDrink } from "../../fetching/local";
import { useNavigate } from "react-router-dom";
import { Input, Select, MenuItem } from "@mui/material";

export default function CreateNewDrink(userId) {
	const [drinksName, setDrinksName] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [recipe, setRecipe] = useState("");
	const [image, setImage] = useState("");
	const [glass, setGlass] = useState("");
	const [alcoholic, setAlcoholic] = useState("");

	const navigate = useNavigate();
	// console.log("userId in createnewdrink", userId);
	const userIdCND = Number(userId.userId);
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
				glass,
				alcoholic,
				userIdCND
			);
			console.log("API Data", createDrinkResult);
		} catch (error) {
			console.error(error);
		}
	}

	const handleChange = (e) => {
		setAlcoholic(e.target.value);
	};

	return (
		<div className="formGroup">
			<h2>Create your own drink</h2>
			<form onSubmit={handleSubmit}>
				<input
					id="formInput"
					className="inputField"
					value={drinksName}
					type="text"
					name="title"
					placeholder="Drink name"
					onChange={(e) => setDrinksName(e.target.value)}
				/>
				<br />
				<input
					id="formInput"
					className="inputField"
					value={image}
					type="text"
					name="title"
					placeholder="Image"
					onChange={(e) => setImage(e.target.value)}
				/>
				<br />
				<textarea
					cols={30}
					rows={10}
					className="inputField"
					value={ingredients}
					type="text"
					name="ingredients"
					placeholder="Ingredients"
					onChange={(e) => setIngredients(e.target.value)}
				/>
				<br />
				<textarea
					cols={30}
					rows={10}
					className="inputField"
					value={recipe}
					type="text"
					name="recipe"
					placeholder="Recipe"
					onChange={(e) => setRecipe(e.target.value)}
				/>
				<br />
				<input
					id="formInput"
					className="inputField"
					value={glass}
					type="text"
					name="glass"
					placeholder="Glass"
					onChange={(e) => setGlass(e.target.value)}
				/>
				<br />
				<div>Alcoholic?</div>
				<Select
					className="inputField"
					value={alcoholic}
					type="text"
					name="alcoholic"
					placeholder="alcoholic"
					onChange={handleChange}
				>
					<MenuItem value={false}>No</MenuItem>
					<MenuItem value={true}>Yes</MenuItem>
				</Select>
				<br />
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}
