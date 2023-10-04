import { useState, useEffect } from "react";
import {
     fetchAllAlcDrinks,
     fetchAllNonAlcDrinks,
     fetchCocktailsByIngredient,
     fetchCocktailById,
} from "../../fetching/cocktaildb";
import DetailsButton from "./DetailsButton";
import FavoriteButton from "./FavoriteButton.jsx";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

export default function CocktailDBDrinkCard({ ingredientName }) {
     const [alcDrinks, setAlcDrinks] = useState([]);
     const [nonAlcDrinks, setNonAlcDrinks] = useState([]);
     const [byIngredient, setByIngredient] = useState([]);
     // const [ingredName, setIngredName] = useState("");
     //  const [alcArrayToShow, setAlcArrayToShow] = useState([]);
     const [chosenDrinkId, setChosenDrinkId] = useState(null);
     const [drinkToRender, setDrinkToRender] = useState([]);
     const [localArray, setLocalArray] = useState([]);
     const [isToggled, setIsToggled] = useState(false);

     const [randomIndexAlc, setRandomIndexAlc] = useState(null);
     const [randomIndexNonAlc, setRandomIndexNonAlc] = useState(null);

     const ingredName = ingredientName;

     // TOGGLE LOGIC
     function handleSwitch(event) {
          setIsToggled(event.target.checked);
     }

     // Alcohol toggle
     const PinkSwitch = styled(Switch)(({ theme }) => ({
          "& .MuiSwitch-switchBase.Mui-checked": {
               color: pink[600],
               "&:hover": {
                    backgroundColor: alpha(
                         pink[600],
                         theme.palette.action.hoverOpacity
                    ),
               },
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
               backgroundColor: pink[600],
          },
     }));

     console.log("ingredient name at top", ingredientName);

     useEffect(() => {
          async function getAllAlcDrinks() {
               const response = await fetchAllAlcDrinks();
               // console.log("response in getAllAlcDrinks on CDB Drink Card ", response);
               setAlcDrinks(response.drinks);
          }
          getAllAlcDrinks();
          // console.log("alc drinks in the useEffect", alcDrinks);
          //COMMENTED OUT FOR SIMPLICITY OF TESTING
     }, []);

     useEffect(() => {
          async function getAllNonAlcDrinks() {
               const response = await fetchAllNonAlcDrinks();

               setNonAlcDrinks(response.drinks);
          }
          getAllNonAlcDrinks();
     }, []);
     //console.log("All nonAlcDrinks in API", nonAlcDrinks);

     useEffect(() => {
          console.log("ingredientName in UE", ingredientName);
          // setIngredName(ingredientName);

          console.log("ingredNamein UE", ingredName);
          setTimeout(1000);
          async function getCocktailsByIngredient() {
               const response = await fetchCocktailsByIngredient(ingredName);
               // console.log("all bourbon drinks in API", response.drinks);
               setByIngredient(response.drinks);
          }
          getCocktailsByIngredient();
          console.log("byIngredient after useEffect", byIngredient);
     }, [ingredName]);

     //Make an array of idDrink values from all NonAlc
     //Make an array of idDrink values from Milk
     //Compare those arratys to see which nonAlcs have Milk

     const nonAlcArray = [];

     //console.log("nonAlcArray ", nonAlcArray);

     const ingredientDrinksAPI = [];
     const nonAlcIngredientArray = [];
     useEffect(() => {
          nonAlcDrinks.map((nonAlcDrink) => {
               nonAlcArray.push(nonAlcDrink.idDrink);
          });
          byIngredient.map((ingredientDrink) => {
               ingredientDrinksAPI.push(ingredientDrink.idDrink);
          });

          for (let i = 0; i <= nonAlcArray.length; i++) {
               if (ingredientDrinksAPI.includes(nonAlcArray[i])) {
                    nonAlcIngredientArray.push(nonAlcArray[i]);
               }
          }
          // console.log("ingredientDrinkAPI", ingredientDrinksAPI);
     }, [byIngredient, nonAlcArray]);

     //console.log("NonAlcIngredientArray", NonAlcIngredientArray);

     //Make an array of idDrink values from all Alc
     //Use the ingredient array we already made
     //Compare those arrays to see which Alcs have Milk

     const alcArray = [];
     const alcIngredientArray = [];
     useEffect(() => {
          alcDrinks.map((alcDrink) => {
               alcArray.push(alcDrink.idDrink);
               //strips down to [id numbers of alc drinks]
          });
          // console.log("alcArray", alcArray);
          byIngredient.map((ingredientDrink) => {
               ingredientDrinksAPI.push(ingredientDrink.idDrink);
               //strips down to [id numbers of drinks w/ ingredient]
          });
          for (let i = 0; i <= alcArray.length; i++) {
               if (ingredientDrinksAPI.includes(alcArray[i])) {
                    alcIngredientArray.push(alcArray[i]);
                    //[compares the ids between the two]
               }
          }
          console.log("alcIngredientArray", alcIngredientArray);
          const bothArrays = alcIngredientArray.concat(nonAlcIngredientArray);
          setLocalArray(bothArrays);
          console.log("bothArrays in line 139", bothArrays);
          //alcoholic drinks that include the chosen ingredient

          // If we want randomization on the first load, then comment it in
          randomizeIndices();

          //concat with the nonalc drinks that include the ingredient
     }, [alcDrinks, byIngredient]);

     // if there are items in dependency, it's going to rerun this useEffects if it detects changes in those properties, so if it's empty it will only run once

     //concatenate the alcDrinkIngredient and nonAlcDrinkIngredient Arrays
     //conditionally setChosenDrinkId based on whether it's from non or concat array
     // let randomIndexAlc = Math.floor(Math.random() * localArray.length);
     // let randomIndexNonAlc = Math.floor(
     // 	Math.random() * nonAlcIngredientArray.length
     // );

     // randomizing indexes
     // useEffect(() => {
     // 	setRandomIndexAlc(Math.floor(Math.random() * localArray.length));
     // 	setRandomIndexNonAlc(
     // 		Math.floor(Math.random() * nonAlcIngredientArray.length)
     // 	);
     //      
     // }, []);

     function randomizeIndices(){
          const alcIndex = (Math.floor(Math.random() * localArray.length));
     	const nonAlcIndex = (
     		Math.floor(Math.random() * nonAlcIngredientArray.length)
     	);
          setRandomIndexAlc(alcIndex)
          setRandomIndexNonAlc(nonAlcIndex)
     };

     //HANDLECLICK FOR SUGGEST ANOTHER
     function handleClick() {
          randomizeIndices();
          
          if(isToggled){
               setChosenDrinkId(localArray[randomIndexAlc]);
          } else {
               setChosenDrinkId(localArray[randomIndexNonAlc]);
          }
     };

     useEffect(() => {
          // console.log("randomIndexAlc in UE", randomIndexAlc);
          // console.log("randomIndexNonAlc", randomIndexNonAlc);
          if (isToggled) {
               setChosenDrinkId(localArray[randomIndexAlc]);
          } else if (!isToggled && nonAlcIngredientArray.length > 0) {
               setChosenDrinkId(nonAlcIngredientArray[randomIndexNonAlc]);
          } else if (!isToggled && nonAlcIngredientArray.length == 0) {
               setChosenDrinkId(12698); //mango lassi ID
          }
     }, [localArray, nonAlcIngredientArray, isToggled]);

     // fetching cocktail by id from API
     useEffect(() => {
          console.log("chosenDrinkId in UE", chosenDrinkId);
          const chosenId = chosenDrinkId;
          async function getCocktailById() {
               const response = await fetchCocktailById(chosenId);
               console.log("response from getCocktailById", response);
               if (response) {
                    setDrinkToRender(response.drinks[0]);
               } else {
                    console.log("can't get single drink to render");
               }
          }
          getCocktailById();
     }, [chosenDrinkId, isToggled]);

     console.log("drink to render above return", drinkToRender);
     return (
          <section id="drink-card">
               <FormGroup>
                    <FormControlLabel
                         control={
                              <PinkSwitch
                                   checked={isToggled}
                                   onChange={(event) => handleSwitch(event)}
                              />
                         }
                         label="Show alcoholic drinks"
                    />
               </FormGroup>
               {/* {console.log("alcArrayToShow below Hello", alcArrayToShow)} */}
               {drinkToRender && <h1>{drinkToRender.strDrink}</h1>}
               {drinkToRender && <img src={drinkToRender.strDrinkThumb} />}
               <br />
               {<DetailsButton drink={chosenDrinkId} />}
               <button onClick={handleClick}>Suggest Another Drink</button>
          </section>
     );
}
