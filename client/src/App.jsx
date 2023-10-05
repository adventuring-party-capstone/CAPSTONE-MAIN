import { useState, useEffect } from "react";

import "./App.css";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
// import DarkModeToggle from "./components/DarkModeToggle";
import Toggle from "react-toggle";
import "react-toggle/style.css";
// import { useColorScheme } from "./useColorScheme";

function App() {
	//get tokens where other components can use them
	const [spotifyToken, setSpotifyToken] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	// const [appClass, setAppClass] = useState("");
	// const [eleId, setEleId] = useState("");
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		setToken(window.localStorage.getItem("token"));
		setUserId(window.localStorage.getItem("userId"));
		setSpotifyToken(window.localStorage.getItem("spotifyToken"));
		setIsDark(window.localStorage.getItem("dark-mode"));
	}, []);

	// DARK MODE CODE
	let darkMode = localStorage.getItem("dark-mode");

	console.log("isDark in App", isDark);
	// console.log("darkMode in App", darkMode);
	// console.log("dark-mode in app", window.localStorage.getItem("dark-mode"));

	const appDiv = document.getElementById("app-container");

	// useEffect(() => {
	// 	setEleId(appDiv);
	// }, [appDiv]);

	const toggle = document.getElementById("mode-toggle");
	useEffect(() => {
		function enableDarkMode() {
			appDiv.classList.add("light-mode");
			localStorage.setItem("dark-mode", "enabled");
		}

		function disableDarkMode() {
			appDiv.classList.remove("light-mode");
			localStorage.setItem("dark-mode", "disabled");
		}

		if (toggle) {
			toggle.addEventListener("click", (event) => {
				darkMode = localStorage.getItem("dark-mode"); // update darkMode when clickced
				if (darkMode === "disabled") {
					enableDarkMode();
				} else {
					disableDarkMode();
				}
			});
		}
	}, [appDiv, toggle]);

	return (
		<div id="app-container">
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
			{/* <DarkModeToggle
				appClass={appClass}
				setAppClass={setAppClass}
				eleId={eleId}
				setEleId={setEleId}
				isDark={isDark}
				setIsDark={setIsDark}
			/> */}
			<Toggle
				checked={isDark}
				onChange={({ target }) => setIsDark(target.checked)}
				icons={{ checked: "🌙", unchecked: "🔆" }}
				aria-label="Dark mode toggle"
				id="mode-toggle"
			/>
		</div>
	);
}

export default App;
