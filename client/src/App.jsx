import { useState, useEffect } from "react";

import "./App.css";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";

function App() {
	//get tokens where other components can use them
	const [spotifyToken, setSpotifyToken] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

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
		<div id="app-container" className={`${dark ? "dark-mode" : "light-mode"}`}>
			<h1>let;s get this money</h1>
			<SideNav />
			<NavBar
				token={token}
				setToken={setToken}
				userId={userId}
				setUserId={setUserId}
			/>
			<MainSection
				token={token}
				setToken={setToken}
				userId={userId}
				setUserId={setUserId}
				spotifyToken={spotifyToken}
				setSpotifyToken={setSpotifyToken}
			/>

			<label className="switch">
				<input type="checkbox" onClick={toggleDarkMode} />
				<span className="slider round">Dark Mode</span>
			</label>
		</div>
	);
}

export default App;
