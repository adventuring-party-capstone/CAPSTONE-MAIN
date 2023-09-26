import AllDrinks from "./AllDrinks";
import Home from "./Home";
import Favorites from "./Favorites";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";

export default function MainSection({ token, setToken }) {
     return (
          <div id="main-section-container">
               <Routes>
                    <Route
                         path="/"
                         element={<Home token={token} setToken={setToken} />}
                    ></Route>
                    <Route path="/drinks" element={<AllDrinks />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route
                         path="/login"
                         element={<Login token={token} setToken={setToken} />}
                    />
               </Routes>
          </div>
     );
}
