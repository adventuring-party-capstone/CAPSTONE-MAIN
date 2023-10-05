import { useState, useEffect } from "react";

import "./App.css";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
	//get tokens where other components can use them
	const [spotifyToken, setSpotifyToken] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [appClass, setAppClass] = useState("");
	const [eleId, setEleId] = useState("");

	useEffect(() => {
		setToken(window.localStorage.getItem("token"));
		setUserId(window.localStorage.getItem("userId"));
		setSpotifyToken(window.localStorage.getItem("spotifyToken"));
	}, []);

	const appDiv = document.getElementById("app-container");

	useEffect(() => {
		setEleId(appDiv);
	}, [appDiv]);

	return (
		<div id="app-container" className={appClass}>
			<h1>let;s get this money</h1>
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
			<DarkModeToggle
				appClass={appClass}
				setAppClass={setAppClass}
				eleId={eleId}
				setEleId={setEleId}
			/>
		</div>
	);
}

export default App;
