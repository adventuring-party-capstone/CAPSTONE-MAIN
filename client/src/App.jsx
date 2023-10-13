import { useState, useEffect } from "react";
import dayModeGrapefruit from "./assets/day_mode_lemon.mp4";
import darkModeRedDrink from "./assets/dark_mode_firey_red.mp4";
import "./App.css";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import logo from "./assets/Studio_drink_logo.svg";

function App() {
	//get tokens where other components can use them
	const [spotifyToken, setSpotifyToken] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [genreSelect, setGenreSelect] = useState(
		Number(window.localStorage.getItem("genreSelect"))
	);

	const handleSnackbarOpen = () => {
		setSnackbarOpen(true);
	};

	const handleSnackbarClose = () => {
		setSnackbarOpen(false);
	};

	// MUSIC PLAYER
	useEffect(() => {
		setGenreSelect(Number(window.localStorage.getItem("genreSelect")));
	}, []);

	// DARK MODE LOGIC --------------- //
	const [dark, setDark] = useState(
		window.localStorage.getItem("dark-mode") === "true"
	);

	useEffect(() => {
		setToken(window.localStorage.getItem("token"));
		setUserId(window.localStorage.getItem("userId"));
		setSpotifyToken(window.localStorage.getItem("spotifyToken"));
	}, []);

	useEffect(() => {
		localStorage.setItem("dark-mode", dark);
	}, [dark]);

	function toggleDarkMode() {
		setDark(!dark);
	}

	return (
		<div id="content">
			<div
				id="app-container"
				className={`${dark ? "dark-mode" : "light-mode"}`}
			>
				<div id="header-logo-switch">
					<div id="header-logo">
						<img src={logo} id="logo" />
						<h1 className="studio-drink-header">Studio Drink</h1>
					</div>
					<div>
						<label className="switch">
							<input
								type="checkbox"
								checked={dark}
								onClick={toggleDarkMode}
							/>
							<span className="slider round">
								{dark ? " " + "🌙" : "🌞"}
							</span>
						</label>
					</div>
				</div>
				<SideNav
					mode={dark}
					token={token}
					setGenreSelect={setGenreSelect}
					genreSelect={genreSelect}
				/>
				<br />
				<br />

				<MainSection
					token={token}
					setToken={setToken}
					userId={userId}
					setUserId={setUserId}
					spotifyToken={spotifyToken}
					setSpotifyToken={setSpotifyToken}
				/>
				{dark ? (
					<div id="video-home-dark">
						<h1></h1>
						<video autoPlay loop muted style={{ minWidth: "100%" }}>
							<source
								src={darkModeRedDrink}
								type="video/mp4"
							></source>
						</video>
					</div>
				) : (
					<div id="video-home">
						<video autoPlay loop muted style={{ minWidth: "100%" }}>
							<source
								src={dayModeGrapefruit}
								type="video/mp4"
							></source>
						</video>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
