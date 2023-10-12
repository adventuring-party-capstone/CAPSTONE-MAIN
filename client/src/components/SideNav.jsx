import { useState, useEffect } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { BiSolidDrink, BiDrink } from "react-icons/bi";

export default function SideNav({ mode, token }) {
	const [isOpen, setIsOpen] = useState(false);
	const buttonX = document.getElementById("buttonX");

	function toggleNav() {
		if (isOpen) {
			myFunction(buttonX)
		}
	}

	function myFunction(x) {
		x.classList.toggle("change");
	}

	/* Set the width of the side navigation to 250px */
	function openNav() {
		if (document.getElementById("mySidenav")) {
			document.getElementById("mySidenav").style.width = "250px";
			myFunction(buttonX);
		}
	}

	// /* Set the width of the side navigation to 0 */
	function closeNav() {
		// if (document.getElementById("mySidenav")?.width !== "0") {
		document.getElementById("mySidenav").style.width = "0";
		// }
	}



	return (
		<div>
			<div id="buttonX" className="container" onClick={() => openNav()}>
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
			</div>

			<div id="mySidenav" className="sidenav">

				<a href="" className="closebtn" onClick={() => closeNav()}>&times;</a>
				<a href="/">Home</a>
				<a href="/all_drinks">Drinks</a>
				<a href="#">Clients</a>
				<a href="#">Contact</a>
			</div>
		</div>
	)
}
