// import { useState } from 'react'

import "./App.css";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div id="app-container">
			<h1>let;s get this money</h1>
			<NavBar />
			<MainSection />
		</div>
	);
}

export default App;
