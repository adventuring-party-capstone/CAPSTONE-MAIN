import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useColorScheme } from "./useColorScheme";
import { useState, useEffect } from "react";

export default function DarkModeToggle({
	appClass,
	setAppClass,
	eleId,
	setEleId,
}) {
	// const [isDark, setIsDark] = useColorScheme();
	const [isDark, setIsDark] = useState(true);

	function handleToggle() {
		setIsDark(!isDark);
	}

	useEffect(() => {
		// console.log("eleId inside UE", eleId);
		const toggle = document.getElementById("mode-toggle");

		// const classList = eleId.classList;
		if (isDark && eleId) {
			toggle.addEventListener("click", function handleClick() {
				eleId.classList.add("dark-mode-screen");
			});
		} else if (!isDark && eleId) {
			// console.log("eleId in else if", eleId);
			toggle.addEventListener("click", function handleClick() {
				eleId.classList.remove("dark-mode-screen");
				eleId.classList.add("");
			});
		}
	}, [eleId, isDark, setAppClass, setEleId]);

	return (
		<Toggle
			checked={isDark}
			onChange={({ target }) => setIsDark(target.checked) && handleToggle()}
			icons={{ checked: "🌙", unchecked: "🔆" }}
			aria-label="Dark mode toggle"
			id="mode-toggle"
		/>
	);
}
