import { useState, useEffect } from "react";
import {
     fetchAllAlcDrinks,
     fetchAllNonAlcDrinks,
     fetchCocktailsByIngredient,
} from "../../fetching/cocktaildb";

export default function CocktailDBDrinkCard() {
     const [alcDrinks, setAlcDrinks] = useState([]);
     const [nonAlcDrinks, setNonAlcDrinks] = useState([]);
     const [byIngredient, setByIngredient] = useState([]);

     useEffect(() => {
          async function getAllAlcDrinks() {
               const response = await fetchAllAlcDrinks();
               //    console.log(
               //         "response in getAllAlcDrinks on CDB Drink Card ",
               //         response
               //    );
               setAlcDrinks(response.drinks);
               //    console.log("alc drinks in the useEffect", alcDrinks);
          }
          //   getAllAlcDrinks();
          //COMMENTED OUT FOR SIMPLICITY OF TESTING
     }, []);

     useEffect(() => {
          async function getAllNonAlcDrinks() {
               const response = await fetchAllNonAlcDrinks();
               console.log(
                    "response.drinks in getAllNonAlcDrinks on CDB Drink Card ",
                    response.drinks
               );
               setNonAlcDrinks(response.drinks);
          }
          getAllNonAlcDrinks();
     }, []);
     console.log("All nonAlcDrinks in API", nonAlcDrinks);

     //Make an array of idDrink values from all NonAlc
     //Make an array of idDrink values from Milk
     //Compare those arratys to see which nonAlcs have Milk

     const nonAlcArray = [];
     nonAlcDrinks.map((nonAlcDrink) => {
          nonAlcArray.push(nonAlcDrink.idDrink);
     });
     console.log("nonAlcArray ", nonAlcArray);

     const ingredientDrinksAPI = [];
     byIngredient.map((ingredientDrink) => {
          ingredientDrinksAPI.push(ingredientDrink.idDrink);
     });
     console.log("ingredientDrinkAPI", ingredientDrinksAPI);

     const NonAlcIngredientArray = [];
     for (let i = 0; i <= nonAlcArray.length; i++) {
          if (ingredientDrinksAPI.includes(nonAlcArray[i])) {
               NonAlcIngredientArray.push(nonAlcArray[i]);
          }
     }
     console.log("NonAlcIngredientArray", NonAlcIngredientArray);

     //  TEMPORARY HARD-CODED INGREDIENT VARIABLE
     const ingredient = "Milk";

     useEffect(() => {
          async function getCocktailsByIngredient() {
               const response = await fetchCocktailsByIngredient(ingredient);
               //    console.log("all milk drinks in API", response.drinks);
               setByIngredient(response.drinks);
          }
          getCocktailsByIngredient();
     }, []);
     console.log("byIngredient after useEffect", byIngredient);

     return (
          <section>
               {NonAlcIngredientArray.map((drink) => {
                    return (
                         <section>
                              <p>{drink}</p>
                         </section>
                    );
               })}
          </section>
     );
}
