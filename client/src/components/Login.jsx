// This component is the login function

import { useState } from "react";
import { login } from "../../fetching/local";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

export default function Login({ token, setToken, setUserId, dark }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorText, setErrorText] = useState(false);
	const nav = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("entering handle submit");
		// console.log(username, password);
		try {
			const response = await login(username, password);
			console.log("response in handle submit", response);
			setToken(response.token);
			setUserId(response.user.users_id);

			console.log("response.token in Login function: ", response.token);
			console.log("response", response);
			localStorage.setItem("token", response.token);
			localStorage.setItem("userId", response.user.users_id);

			nav("/");
		} catch (error) {
			setErrorText(true);
			console.error("can't login", error);
		}
	};

	const pw = document.getElementById("password");

	function showPassword() {
		if (pw.type === "password" && pw.type === "password") {
			pw.type = "text";
			pw.type = "text";
		} else {
			pw.type = "password";
			pw.type = "password";
		}
	}

	return (
		<section>
			<div id="login-container">
				<div id="signin-container">
					<h1>LOGIN</h1>
					<form onSubmit={handleSubmit}>
						<div id="login-text">
							<label>
								Username: {""}
								<input
									id="username"
									placeholder="enter username"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
							</label>
							<br />
							<label>
								Password: {""}
								<input
									id="password"
									type="password"
									placeholder="enter password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</label>
							<label style={{ "font-size": "1rem" }}>
								Show Password{" "}
								<input
									type="checkbox"
									onClick={() => showPassword()}
								/>
							</label>
						</div>
						{errorText && (
							<div>
								<br />
								<h3>Incorrect username or password.</h3>
							</div>
						)}
						<br />
						<button type="submit" className="clear-button">
							Submit
						</button>
					</form>
					<h2>
						<Link to="/register">Create New Account</Link>
					</h2>
				</div>
			</div>
			{dark ? (
				<div className="video-home-dark">
					<h1></h1>
					<video autoPlay loop muted style={{ minWidth: "100%" }}>
						<source src={DarkMode} type="video/mp4"></source>
					</video>
				</div>
			) : (
				<div className="video-home">
					<video autoPlay loop muted style={{ minWidth: "100%" }}>
						<source src={LightMode} type="video/mp4"></source>
					</video>
				</div>
			)}
		</section>
	);
}
