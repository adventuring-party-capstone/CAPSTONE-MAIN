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
	// const [isDark, setIsDark] = useState(true);
	const [dark, setDark] = useState(
		window.localStorage.getItem("dark-mode") === "true"
	);

	useEffect(() => {
		setToken(window.localStorage.getItem("token"));
		setUserId(window.localStorage.getItem("userId"));
		setSpotifyToken(window.localStorage.getItem("spotifyToken"));
		// setIsDark(window.localStorage.getItem("dark-mode"));
		// setIsDark(window.localStorage.getItem("isDark"));
	}, []);

	// DARK MODE CODE
	// let darkMode = localStorage.getItem("dark-mode");
	// let darkMode = localStorage.getItem("isDark");

	// console.log("isDark in App", isDark);
	// console.log("darkMode in App", darkMode);
	// console.log("dark-mode in app", window.localStorage.getItem("dark-mode"));

	const appDiv = document.getElementById("app-container");

	// useEffect(() => {
	// 	setEleId(appDiv);
	// }, [appDiv]);

	// const toggle = document.getElementById("mode-toggle");
	// useEffect(() => {
	// 	function enableDarkMode() {
	// 		appDiv.classList.add("light-mode");
	// 		// localStorage.setItem("dark-mode", "enabled");
	// 		localStorage.setItem("isDark", "true");
	// 	}

	// 	function disableDarkMode() {
	// 		appDiv.classList.remove("light-mode");
	// 		// localStorage.setItem("dark-mode", "disabled")
	// 		setIsDark(JSON.parse(localStorage.setItem("isDark", "false")));
	// 	}

	// 	if (toggle) {
	// 		toggle.addEventListener("click", (event) => {
	// 			// darkMode = localStorage.getItem("isDark"); // update isDark when clicked
	// 			if (isDark === false) {
	// 				enableDarkMode();
	// 			} else if (isDark) {
	// 				disableDarkMode();
	// 			}
	// 		});
	// 	}
	// }, [appDiv, toggle]);

	// TESTING NEW CODE

	useEffect(() => {
		localStorage.setItem("dark-mode", dark);
	}, [dark]);

	function toggleDarkMode() {
		setDark(!dark);
	}

	return (
		<div id="app-container" className={`${dark ? "dark-mode" : "light-mode"}`}>
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
			{/* <Toggle
				checked={isDark}
				onChange={({ target }) => setIsDark(target.checked)}
				icons={{ checked: "🌙", unchecked: "🔆" }}
				aria-label="Dark mode toggle"
				id="mode-toggle"
			/> */}
			<button className="dark-mode-toggle" onClick={toggleDarkMode}>
				Enable Dark Mode
			</button>
		</div>
	);
}

export default App;
