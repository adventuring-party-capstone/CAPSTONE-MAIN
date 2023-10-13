import { useState, useEffect } from "react";
import { BsMusicNoteBeamed, BsTypeH1 } from "react-icons/bs";
import {
	AiOutlineLogout,
	AiOutlineLogin,
	AiOutlineConsoleSql,
} from "react-icons/ai";
import { BiSolidDrink, BiDrink } from "react-icons/bi";

export default function SideNav({ mode, token, genreSelect, setGenreSelect }) {
	const buttonX = document.getElementById("buttonX");
	const [isOpen, setIsOpen] = useState(false);

	function myFunction(x) {
		x.classList.toggle("change");
		setIsOpen(!isOpen);
	}

	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}

	useEffect(() => {
		if (isOpen) {
			openNav();
		} else if (!isOpen) {
			closeNav();
		}
	}, [isOpen]);

	// MUSIC PLAYER
	useEffect(() => {
		setGenreSelect(Number(window.localStorage.getItem("genreSelect")));
	}, [setGenreSelect]);

	// this function lets the genre persist between reloads (so the player stays present)
	function genreSelector(num) {
		console.log("num is ", num);
		window.localStorage.setItem("genreSelect", num);
		setGenreSelect(Number(window.localStorage.getItem("genreSelect")));
	}

	return (
		<div>
			<div
				id="buttonX"
				className="container"
				onClick={() => myFunction(buttonX)}
			>
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
			</div>

			<div id="mySidenav" className="sidenav">
				<a href="/">Home</a>
				<a href="/all_drinks">Drinks</a>
				<a href="/profile">Profile</a>
				<a href="/random_drink">Drink Randomizer</a>
				<a href="/spotify"></a>
				<a href="/createDrink">Mixologist</a>
				<a href="/about">About Us</a>
				{!token && <a href="/register">Register</a>}
				{!token && <a href="/login">Login</a>}
				{token && <a href="/logout">Logout</a>}

				<div id="music-player-container">
					<section id="music-player">
						{genreSelect === 1 && (
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1EIefLxrHQP8p4?utm_source=generator"
								width="100%"
								height="352"
								frameBorder="0"
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
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
								allowFullScreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						)}
					</section>
					<div className="dropdown">
						<label className="droplabel">Listen to Music: </label>
						<br />
						<button className="dropbtn">Choose Genre</button>
						<div className="dropdown-content">
							<a onClick={() => genreSelector(1)}>Alternative Rock</a>
							<a onClick={() => genreSelector(2)}>Classical</a>
							<a onClick={() => genreSelector(3)}>Electronic</a>
							<a onClick={() => genreSelector(4)}>Hip Hop</a>
							<a onClick={() => genreSelector(5)}>Jazz</a>
							<a onClick={() => genreSelector(6)}>Pop</a>
							<a onClick={() => genreSelector(7)}>R&B</a>
							<a onClick={() => genreSelector(8)}>Rock</a>
							<a onClick={() => genreSelector(9)}>Soundtrack</a>
							<a onClick={() => genreSelector(10)}>World</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
