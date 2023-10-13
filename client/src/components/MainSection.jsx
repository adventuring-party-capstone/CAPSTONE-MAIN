import AllDrinks from "./AllDrinks";
import Home from "./Home";
import Favorites from "./Favorites";
import Login from "./Login";
import Logout from "./Logout";
import Spotify from "./Spotify";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import CreateNewDrink from "./CreateNewDrink";
import Profile from "./Profile";
import SideNav from "./SideNav";
import RandomDrinkButton from "./RandomDrinkButton";
import About from "./About";

export default function MainSection({
    token,
    setToken,
    userId,
    setUserId,
    spotifyToken,
    setSpotifyToken,
    dark,
}) {
    console.log("userId in main section", userId);

    return (
        <div id="main-section-container">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            token={token}
                            setToken={setToken}
                            userId={userId}
                            setUserId={setUserId}
                            spotifyToken={spotifyToken}
                            setSpotifyToken={setSpotifyToken}
                            dark={dark}
                        />
                    }
                ></Route>
                <Route path="/about" element={<About dark={dark} />}></Route>
                <Route
                    path="/all_drinks"
                    element={
                        <AllDrinks token={token} userId={userId} dark={dark} />
                    }
                ></Route>
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            token={token}
                            userId={userId}
                            setUserId={setUserId}
                        />
                    }
                ></Route>
                <Route
                    path="/register"
                    element={<Register dark={dark} />}
                ></Route>
                <Route
                    path="/createDrink"
                    element={
                        <CreateNewDrink
                            token={token}
                            userId={userId}
                            dark={dark}
                        />
                    }
                ></Route>
                <Route
                    path="/login"
                    element={
                        <Login
                            token={token}
                            setToken={setToken}
                            userId={userId}
                            setUserId={setUserId}
                            dark={dark}
                        />
                    }
                />
                <Route
                    path="/logout"
                    element={<Logout token={token} setToken={setToken} />}
                />
                <Route
                    path="/profile"
                    element={
                        <Profile
                            token={token}
                            setToken={setToken}
                            userId={userId}
                            dark={dark}
                        />
                    }
                />
                <Route
                    path="/random_drink"
                    element={<RandomDrinkButton userId={userId} dark={dark} />}
                />
                <Route
                    path="/sidenav"
                    element={
                        <SideNav
                            token={token}
                            setToken={setToken}
                            userId={userId}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
