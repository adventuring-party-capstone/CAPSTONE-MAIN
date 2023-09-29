// This component renders the homepage

import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import Register from "./Register";
import Login from "./Login";
import { Link } from "react-router-dom";
import CocktailDBDrinkCard from "./CocktailDBDrinkCard";

export default function Home({ token, setToken, userId, setUserId }) {
     const [musicInput, setMusicInput] = useState("");
     const [musicChoice, setMusicChoice] = useState("");
     const [isClicked, setIsClicked] = useState(false);

     console.log("userId in home: ", userId);

     const handleSubmit = async (event) => {
          event.preventDefault();
          setMusicChoice(musicInput);
          // console.log("musicChoice", musicChoice);

          if (musicChoice) {
               console.log("entering handleSubmit");
               setIsClicked(!isClicked);
          } else {
               console.log("can't get drink choice");
          }
     };

     return (
          <div id="home-container">
               <h1>ENTER MUSIC CHOICE</h1>
               <form action="">
                    <label htmlFor="Search">Enter Genre </label>
                    <input
                         type="text"
                         name="search"
                         placeholder="Enter music choice here"
                         onChange={(event) => setMusicInput(event.target.value)}
                         // onKeyDown={handleKeyDown}
                    />
               </form>
               <br />
               <button onClick={(event) => handleSubmit(event)}>
                    Suggest Drink
               </button>
               <CocktailDBDrinkCard />
               {musicChoice && (
                    <DrinkCard musicChoice={musicChoice} userId={userId} />
               )}
               {!token && (
                    <div>
                         <Login
                              token={token}
                              setToken={setToken}
                              setUserId={setUserId}
                              userId={userId}
                         />
                         <Link to={"/register"}>Create New Account</Link>
                    </div>
               )}
          </div>
     );
}

// need a search bar
// when someone searches genre id
// save that search param in a variable
// look inside genres_ingredients junction table
// get an array of ingredients matching that genre

// localdb: get all drinks with ingredient matching ingredient_id in genres_ingredients junction table

// render a single drink from the array of drinks matching ingredient on button click,
// when someone clicks again it goes to the next drink

// STRETCH GOALS
// watch out! for duplicate drinks with external API
// API: get all drinks with ingredient
