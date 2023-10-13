// This component renders the homepage
import lemon from "../assets/day_mode_lemon.mp4";
import { useState, useEffect } from "react";

import Spotify from "./Spotify";

import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import RandomDrinkButton from "./RandomDrinkButton";

export default function Home({
	token,
	setToken,
	userId,
	setUserId,
	spotifyToken,
	setSpotifyToken,
}) {
	const [musicInput, setMusicInput] = useState("");
	const [musicChoice, setMusicChoice] = useState("");
	const [oldInput, setOldInput] = useState("");
	const [isClicked, setIsClicked] = useState(false);

	// const navigate = useNavigate();

	console.log("userId in home: ", userId);
	console.log("spotifyToken in Home", spotifyToken);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const realMusicInput = handleInput(musicInput);
		console.log("real music input", realMusicInput);
		if (realMusicInput.length == 0) {
			alert("Please enter a music choice to get a suggested drink.");
		}

		setMusicChoice(realMusicInput);

		// console.log("musicChoice", musicChoice);
		console.log("oldInput", oldInput);

		if (musicChoice) {
			console.log("entering handleSubmit");
			setIsClicked(!isClicked);
			// navigate(0);
			// setMusicChoice("");
		} else {
			console.log("can't get drink choice");
		}
	};

	const handleInput = (musicInput) => {
		// if musicInput has space, then replace the space with a plus symbol
		// else return music input
		if (/\s/.test(musicInput)) {
			return musicInput.replace(" ", "+");
		} else {
			return musicInput;
		}
	};

	// function onChangeFunction(event) {
	// 	setMusicInput(event.target.value);
	// 	setOldInput((event.target.oldvalue = event.target.value));
	// }

	// const drinkCard = document.getElementById("drink-card");
	// const suggestButton = document.getElementsByClassName("glow-on-hover-home");

	return (
		<section>
			<div id="home-container">
				<h1>Enter music choice</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="Search" id="music-label"></label>
					<input
						id="musicChoice"
						type="text"
						name="search"
						placeholder="Enter any artist or genre from Spotify"
						onFocus={(event) =>
							setOldInput(
								(event.target.oldvalue = event.target.value)
							)
						}
						onChange={(event) => setMusicInput(event.target.value)}
					/>
				</form>
				<br />
				{
					<button
						className="glow-on-hover-home"
						onClick={(event) => handleSubmit(event)}
					>
						Suggest Drink
					</button>
				}
				{musicChoice && (
					<Spotify
						musicChoice={musicChoice}
						userId={userId}
						token={token}
						spotifyToken={spotifyToken}
						setSpotifyToken={setSpotifyToken}
						oldInput={oldInput}
					/>
				)}

				{/* {!token && (
				<div>
					<Login
						token={token}
						setToken={setToken}
						setUserId={setUserId}
						userId={userId}
					/>
					<h2>
						<Link to={"/register"}>Create New Account</Link>
					</h2>
				</div>
			)} */}
				{/* <h3>🍸 Drink Contains Alcohol</h3>
			<br />
			<h1>RANDOM DRINK</h1>
			<RandomDrinkButton userId={userId} /> */}
			</div>
		</section>
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
