import { useState, useEffect } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { BiSolidDrink, BiDrink } from "react-icons/bi";

export default function SideNav({ mode, token }) {
	const buttonX = document.getElementById("buttonX");

	// function toggleNav() {
	// 	if (document.getElementsByClassName("container change")) {
	// 		toggleSideBar();
	// 	}
	// }

	// function toggleSideBar() {
	// 	if (document.getElementById("mySidenav")) {
	// 		document.getElementById("mySidenav").style.width = "250px";
	// 		myFunction(buttonX);
	// 	}
	// 	else {
	// 		document.getElementById("mySidenav").style.width = "0";
	// 	}
	// }

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

	const closedContainer = document.getElementsByClassName("container");
	const openedContainer = document.getElementsByClassName("container change");

	function handleNavChanges() {
		if (openedContainer) {
			openedContainer?.addEventListener("click", closeNav());
		} else if (closedContainer) {
			closedContainer?.addEventListener("click", openNav());
		}
	}

	return (
		<div>
			<div id="buttonX" className="container" onClick={() => handleNavChanges()}>
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
