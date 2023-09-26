import { useState, useEffect } from "react";

import "./App.css";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";

function App() {
     //get tokens where other components can use them
     const [token, setToken] = useState(null);
     const [userId, setUserId] = useState(null);
     useEffect(() => {
          setToken(window.localStorage.getItem("token"));
          setUserId(window.localStorage.getItem("userId"));
     }, [])
     return (
          <div id="app-container">
               <h1>let;s get this money</h1>
               <NavBar token={token} setToken={setToken} />
               <MainSection token={token} setToken={setToken} />
          </div>
     );
}

export default App;
