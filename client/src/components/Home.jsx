// This component renders the homepage
import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

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
	dark,
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
				<div id="tag-line">
					<p className="tag-line"> Your music, your drink: </p>
					<p
						className="tag-line"
						style={{ "font-family": "Great Vibes" }}
					>
						Harmony in every sip
					</p>
				</div>
				<div id="form-music-choice">
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
							onChange={(event) =>
								setMusicInput(event.target.value)
							}
						/>
					</form>
				</div>
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
			</div>
			{dark ? (
				<div
					id="video-home-dark"
					style={{
						filter: "brightness(0.95)",
						position: "cover",
					}}
				>
					<h1></h1>
					<video
						autoPlay
						loop
						muted
						playsInline
						style={{ minWidth: "100%" }}
					>
						<source src={DarkMode} type="video/mp4"></source>
					</video>
				</div>
			) : (
				<div id="video-home">
					<video
						autoPlay
						loop
						muted
						playsInline
						style={{ minWidth: "100%" }}
					>
						<source src={LightMode} type="video/mp4"></source>
					</video>
				</div>
			)}{" "}
		</section>
	);
}
