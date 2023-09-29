// This component renders the navigation bar

import { Link } from "react-router-dom";

export default function NavBar({ token, setToken }) {
	console.log("token inside NavBar: ", token);

	return (
		<div id="navbar-container">
			<Link to="/">Home</Link>
			<Link to="/all_drinks">All Drinks</Link>
			<Link to="/spotify">Spotify</Link>
			{token ? (
				<>
					<Link to="/favorites">Favorites</Link>
					<Link to="/logout">Logout</Link>
				</>
			) : (
				<Link to="/login">Login</Link>
			)}
		</div>
	);
}
