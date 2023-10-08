// this component houses the user's favorites and created drinks
import Favorites from "./Favorites";
import { useEffect, useState } from "react";
import UserCreatedDrinks from "./UserCreatedDrinks";
import { fetchSingleUser } from "../../fetching/local";

export default function Profile({ token, setToken, userId }) {
	const [username, setUsername] = useState("");

	// console.log("user id in profile", userId);
	// const [toggleState, setToggleState] = useState(1);
	// const toggleTab = (index) => {
	// 	setToggleState(index);
	// 	console.log("index", index);
	// };
	// onClick={() => toggleTab(1)}

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
			<h1>Welcome, {titleCase(username)}</h1>
			<div>
				<Favorites token={token} userId={userId} />
			</div>
			<div>
				<UserCreatedDrinks userId={userId} />
			</div>
		</section>
	);
}
