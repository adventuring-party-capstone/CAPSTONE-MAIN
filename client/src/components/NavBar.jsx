// This component renders the navigation bar

import { Link } from "react-router-dom";

export default function NavBar({ token, setToken }) {
    return (
        <div id="navbar-container">
            <Link to="/">Home</Link>
            <Link to="/all_drinks">All Drinks</Link>
            <Link to="/profile">Profile</Link>
            {token ? (
                <>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/createDrink">Mixologist</Link>
                    <Link to="/logout">Logout</Link>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
}
