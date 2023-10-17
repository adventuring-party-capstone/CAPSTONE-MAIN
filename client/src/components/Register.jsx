// This function allows a user to register for the site and create a new account

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register, fetchAllUsers } from "../../fetching/local";

import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

const API_URL = `http://localhost:8080/api`;

export default function Register({ dark }) {
	const [users, setUsers] = useState([]);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [successMessage, setSuccessMessage] = useState(null);
	const [error, setError] = useState(null);

	const [text1, setText1] = useState(false);
	const [text2, setText2] = useState(false);
	const [text3, setText3] = useState(false);
	const [text4, setText4] = useState(false);

	const navigate = useNavigate();

	const userObj = {
		username: username,
		password: password,
	};

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const userResponse = await fetchAllUsers();
			console.log("userResponse", userResponse);

			if (password !== password2) {
				setText1(true);
			} else if (
				userResponse.filter((user) => user.username === username)
					.length > 0
			) {
				setText1(false);
				setText2(true);
			} else if (username.length >= 3) {
				const response = await register(userObj);
				console.log("response", response);
				if (response) {
					setSuccessMessage("Sign up successful");
					navigate("/login");
				} else {
					setText3(true);
				}
			} else {
				setText1(false);
				setText2(false);
				setText3(false);
				setText4(true);
				setUsername("");
				setPassword("");
			}
		} catch (error) {
			setError(error.message);
		}
	}

	const pw = document.getElementsByClassName("password");

	function showPassword() {
		if (pw[0].type === "password" && pw[1].type === "password") {
			pw[0].type = "text";
			pw[1].type = "text";
		} else {
			pw[0].type = "password";
			pw[1].type = "password";
		}
	}

	return (
		<section>
			<div id="login-container">
				<div id="create-user-container">
					<h1>CREATE NEW ACCOUNT</h1>
					<br />
					<form onSubmit={handleSubmit}>
						<div id="login-text">
							<label>
								Username:{" "}
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
								Password:{" "}
								<input
									id="password"
									className="password"
									type="password"
									placeholder="enter password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</label>
							<br />
							<label>
								Confirm Password:{" "}
								<input
									id="password"
									className="password"
									type="password"
									placeholder="enter password"
									value={password2}
									onChange={(e) =>
										setPassword2(e.target.value)
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
						{text1 && <h3>Passwords do not match.</h3>}
						{text2 && (
							<h3>
								Username already exists. Please choose another
								username.
							</h3>
						)}
						{text3 && <h3>Can't create new account.</h3>}
						{text4 && <h3>Username too short.</h3>}
						<br />
						<button className="clear-button">Submit</button>
					</form>
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

// old code rendering users list
// {users.map((user) => {
//     return (
//         <>
//             <div>
//                 <p>username: {user.username}</p>
//             </div>
//         </>
//     );
// })}
