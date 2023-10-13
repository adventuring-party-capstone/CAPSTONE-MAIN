import { useState, useEffect } from "react";
import { BsMusicNoteBeamed, BsTypeH1 } from "react-icons/bs";
import {
	AiOutlineLogout,
	AiOutlineLogin,
	AiOutlineConsoleSql,
} from "react-icons/ai";
import { BiSolidDrink, BiDrink } from "react-icons/bi";

export default function SideNav({ mode, token }) {
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
			</div>
		</div>
	);
}
