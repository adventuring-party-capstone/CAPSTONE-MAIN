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
	isDark,
	setIsDark,
}) {
	// const [isDark, setIsDark] = useState(true);
	// const [isDark2, setIsDark2] = useState(true);

	// useEffect(() => {
	// 	localStorage.setItem("isDark", isDark);
	// }, [isDark]);

	useEffect(() => {
		const toggle = document.getElementById("mode-toggle");

		if (isDark && eleId) {
			toggle.addEventListener("click", function handleClick() {
				console.log("isDark in handleToggle 1", isDark);
				eleId.classList.add("light-mode");
				// localStorage.setItem("isDark", isDark);
				setIsDark(!isDark);
				localStorage.setItem("isDark", isDark);

				// setIsDark(JSON.parse(localStorage.getItem("isDark")));
			});
		} else if (!isDark && eleId) {
			toggle.addEventListener("click", function handleClick() {
				console.log("isDark in handleToggle 2", isDark);

				eleId.classList.remove("light-mode");
				setIsDark(!isDark);
				localStorage.setItem("isDark", isDark);

				// localStorage.setItem("isDark", isDark);

				// console.log("JSONparse", JSON.parse(localStorage.getItem("isDark")));

				// setIsDark(JSON.parse(localStorage.getItem("isDark")));
				// eleId.classList.add("");
			});
		}
	}, [eleId, isDark, setAppClass, setEleId]);

	return (
		<Toggle
			checked={isDark}
			onChange={({ target }) => setIsDark(target.checked)}
			icons={{ checked: "🌙", unchecked: "🔆" }}
			aria-label="Dark mode toggle"
			id="mode-toggle"
		/>
	);
}
