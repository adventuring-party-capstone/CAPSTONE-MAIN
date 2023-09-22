// This component renders the homepage

import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";

export default function Home() {
	const [musicInput, setMusicInput] = useState("");
	const [musicChoice, setMusicChoice] = useState("");

	const handleKeyDown = (event) => {
		console.log("event.key", event.key);

		if (event.key === "Enter") {
			event.preventDefault();
			// setMusicInput(event.target.value);
			setMusicChoice(musicInput);
		}
		console.log("music choice", musicChoice);
		// console.log("current music input", musicInput);
	};

	return (
		<div id="home-container">
			<h1>HOMEPAGE HERE</h1>
			<form action="">
				<label htmlFor="Search">Enter Genre Id </label>
				<input
					type="text"
					name="search"
					placeholder="Enter music Input here"
					onChange={(event) => setMusicInput(event.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</form>
			<div>

				<DrinkCard musicChoice={musicChoice} />
			</div>
		</div>
	);

}

// need a search bar
// when someone searches genre id
// save that search param in a variable
// look inside genres_ingredients junction table
// get an array of ingredients matching that genre

// localdb: get all drinks with ingredient matching ingredient_id in genres_ingredients junction table

// render a single drink from the array of drinks matching ingredient on button click,
// when someone clicks again it goes to the next drink

// STRETCH GOALS
// watch out! for duplicate drinks with external API
// API: get all drinks with ingredient
