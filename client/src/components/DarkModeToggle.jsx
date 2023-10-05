import { useState, useEffect } from "react";
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";

export default function DarkModeToggle() {
	const [isDark, setIsDark] = useState(true);

	const systemPrefersDark = useMediaQuery(
		{
			query: "(prefers-color-scheme: dark)",
		},
		undefined,
		(isSystemDark) => setIsDark(isSystemDark)
	);

	useEffect(() => {
		if (isDark) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [isDark, systemPrefersDark]);

	return (
		<Toggle
			checked={isDark}
			onChange={({ target }) => setIsDark(target.checked)}
			icons={{ checked: "🌙", unchecked: "🔆" }}
			aria-label="Dark mode toggle"
		/>
	);
}
