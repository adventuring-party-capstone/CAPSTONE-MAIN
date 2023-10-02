import AllDrinks from "./AllDrinks";
import Home from "./Home";
import Favorites from "./Favorites";
import Login from "./Login";
import Logout from "./Logout";
import Spotify from "./Spotify";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";

export default function MainSection({
	token,
	setToken,
	userId,
	setUserId,
	spotifyToken,
	setSpotifyToken,
}) {
	console.log("userId in main section", userId);

	return (
		<div id="main-section-container">
			<Routes>
				<Route
					path="/"
					element={
						<Home
							token={token}
							setToken={setToken}
							userId={userId}
							setUserId={setUserId}
							spotifyToken={spotifyToken}
							setSpotifyToken={setSpotifyToken}
						/>
					}
				></Route>
				<Route
					path="/all_drinks"
					element={<AllDrinks token={token} userId={userId} />}
				></Route>
				<Route
					path="/favorites"
					element={
						<Favorites token={token} userId={userId} setUserId={setUserId} />
					}
				></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route
					path="/login"
					element={
						<Login
							token={token}
							setToken={setToken}
							userId={userId}
							setUserId={setUserId}
						/>
					}
				/>
				<Route
					path="/logout"
					element={<Logout token={token} setToken={setToken} />}
				/>
				{/* <Route path="/spotify" element={<Spotify />} /> */}
			</Routes>
		</div>
	);
}
