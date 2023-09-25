import AllDrinks from "./AllDrinks";
import Home from "./Home";
import Favorites from "./Favorites";
import { Routes, Route } from "react-router-dom";

export default function MainSection() {
	return (
		<div id="main-section-container">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/drinks" element={<AllDrinks />}></Route>
				<Route path="/favorites" element={<Favorites />}></Route>
			</Routes>
		</div>
	);
}
