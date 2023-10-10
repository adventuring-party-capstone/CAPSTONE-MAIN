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

	// this function lets the genre persist between reloads (so the player stays present)
	function genreSelector(num) {
		console.log("num is ", num);
		window.localStorage.setItem("genreSelect", num);
		setGenreSelect(Number(window.localStorage.getItem("genreSelect")));
	}

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
				<h1>Studio Drink</h1>
				<SideNav mode={dark} token={token} />
				{/* <NavBar
                         token={token}
                         setToken={setToken}
                         userId={userId}
                         setUserId={setUserId}
                    /> */}
				<div id="music-player-container">
					<div className="dropdown">
						<label className="droplabel">
							Listen to Music:{" "}
						</label>
						<br />
						<button className="dropbtn">Choose Genre</button>
						<div className="dropdown-content">
							<a onClick={() => genreSelector(1)}>
								Alternative Rock
							</a>
							<a onClick={() => genreSelector(2)}>
								Classical
							</a>
							<a onClick={() => genreSelector(3)}>
								Electronic
							</a>
							<a onClick={() => genreSelector(4)}>
								Hip Hop
							</a>
							<a onClick={() => genreSelector(5)}>Jazz</a>
							<a onClick={() => genreSelector(6)}>Pop</a>
							<a onClick={() => genreSelector(7)}>R&B</a>
							<a onClick={() => genreSelector(8)}>Rock</a>
							<a onClick={() => genreSelector(9)}>
								Soundtrack
							</a>
							<a onClick={() => genreSelector(10)}>
								World
							</a>
						</div>
					</div>
					<section id="music-player">
						{genreSelect === 1 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EIefLxrHQP8p4?utm_source=generator"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 2 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EQn1VBR3CMMWb?utm_source=generator"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 3 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EQp9BVPsNVof1?utm_source=generator&theme=0"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 4 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EQnqst5TRi17F?utm_source=generator"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 5 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EQqA6klNdJvwx?utm_source=generator"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 6 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EQncLwOalG3K7?utm_source=generator&theme=0"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 7 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EQoqCH7BwIYb7?utm_source=generator"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 8 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EQpj7X7UK8OOF?utm_source=generator&theme=0"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 9 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EIcQBc0YedSHe?utm_source=generator"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
						{genreSelect === 10 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EIgGQHfQwuUUP?utm_source=generator"
								width="100%"
								height="152"
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
					</section>
				</div>
				<MainSection
					token={token}
					setToken={setToken}
					userId={userId}
					setUserId={setUserId}
					spotifyToken={spotifyToken}
					setSpotifyToken={setSpotifyToken}
				/>
				<label className="switch">
					<input
						type="checkbox"
						checked={dark}
						onClick={toggleDarkMode}
					/>
					<span className="slider round">Dark Mode</span>
				</label>
			</div>
		</div>
	);
}

export default App;
