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
	const [isOpen, setIsOpen] = useState(true);

	function myFunction(x) {
		x.classList.toggle("change");
		setIsOpen(!isOpen);
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
			{!isOpen && (
				<div>
					<div id="mySidenav" className="sidenav">
						<a href="/">Home</a>
						<a href="/all_drinks">Drinks</a>
						<a href="#">Clients</a>
						<a href="#">Contact</a>
					</div>
				</div>
			)}
		</div>
	);
}
