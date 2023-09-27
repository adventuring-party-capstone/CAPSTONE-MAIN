// This component is the login function

import { useState } from "react";
import { login } from "../../fetching/local";
import { useNavigate } from "react-router-dom";

export default function Login({ token, setToken, setUserId }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const nav = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("entering handle submit");
		// console.log(username, password);
		try {
			const response = await login(username, password);
			setToken(response.token);
			setUserId(response.user.users_id);

			console.log("response.token in Login function: ", response.token);
			console.log("response", response);
			localStorage.setItem("token", response.token);
			localStorage.setItem("userId", response.user.users_id);
			console.log("response in handle submit", response);
			nav("/");
		} catch (error) {
			console.error("can't login", error);
		}
	};

	return (
		<div id="login-container">
			<div id="signin-container">
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<div id="login-text">
						<label>Username: {""}</label>
						<input
							id="username"
							placeholder="enter username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<br />
						<label>Password: {""}</label>
						<input
							id="password"
							type="password"
							placeholder="enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
