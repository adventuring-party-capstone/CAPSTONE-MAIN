import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useColorScheme } from "./useColorScheme";
import { useState } from "react";

export default function DarkModeToggle() {
	const [isDark, setIsDark] = useColorScheme();
	// const [isDark, setIsDark] = useState(true);

	return (
		<Toggle
			checked={isDark}
			onChange={({ target }) => setIsDark(target.checked)}
			icons={{ checked: "🌙", unchecked: "🔆" }}
			aria-label="Dark mode toggle"
		/>
	);
}
