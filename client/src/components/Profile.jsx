// this component houses the user's favorites and created drinks
import Favorites from "./Favorites";
import { useEffect, useState } from "react";
import UserCreatedDrinks from "./UserCreatedDrinks";
import { fetchSingleUser } from "../../fetching/local";
import { useNavigate } from "react-router-dom";

import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

export default function Profile({ token, setToken, userId, dark }) {
	const [username, setUsername] = useState("");
	const [toggleState, setToggleState] = useState(
		Number(window.localStorage.getItem("toggleState"))
	);
	// const [toggleState, setToggleState] = useState(1);
	const navigate = useNavigate();

	console.log("toggleState is at top of profile", toggleState);

	if (!token) {
		navigate("/login");
	}

	useEffect(() => {
		setToggleState(Number(window.localStorage.getItem("toggleState")));
	}, []);

	useEffect(() => {
		window.localStorage.setItem("toggleState", toggleState);
	}, [toggleState]);

	// grab user info (get user object by user id)
	useEffect(() => {
		async function getSingleUserProfile() {
			console.log("entering GSUP");
			const response = await fetchSingleUser(userId);
			console.log("response in GSUP", response);

			try {
				if (response) {
					setUsername(response.username);
				}
			} catch (error) {
				console.error("can't get user info", error);
			}
		}
		getSingleUserProfile();
	}, [userId]);

	// converts string to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	return (
		<section>
			{token && (
				<div>
					<h1 style={{ fontSize: "3rem" }}>
						Welcome, {titleCase(username)}
					</h1>
					<br />
					<button id="tabLink1" onClick={() => setToggleState(1)}>
						Favorites
					</button>
					<button id="tabLink2" onClick={() => setToggleState(2)}>
						Created Drinks
					</button>
					<br></br>
					<br />
					{toggleState === 1 && (
						<div id="favorites-tab">
							<Favorites token={token} userId={userId} />
						</div>
					)}
					{toggleState === 2 && (
						<div id="created-drinks-tab">
							<UserCreatedDrinks userId={userId} />
						</div>
					)}
				</div>
			)}
			<button className="clear-button">
				<a href="#top" style={{ "text-decoration": "none" }}>
					{" "}
					Back to Top
				</a>
			</button>
			{dark ? (
				<div id="video-home-dark">
					<h1></h1>
					<video autoPlay loop muted style={{ minWidth: "100%" }}>
						<source src={DarkMode} type="video/mp4"></source>
					</video>
				</div>
			) : (
				<div id="video-home">
					<video autoPlay loop muted style={{ minWidth: "100%" }}>
						<source src={LightMode} type="video/mp4"></source>
					</video>
				</div>
			)}
		</section>
	);
}
