import { useState, useEffect } from "react";
import {
     fetchAllAlcDrinks,
     fetchAllNonAlcDrinks,
     fetchCocktailsByIngredient
} from "../../fetching/cocktaildb";

export default function CocktailDBDrinkCard() {
     const [alcDrinks, setAlcDrinks] = useState([]);
     const [nonAlcDrinks, setNonAlcDrinks] = useState([]);
     const [byIngredient, setByIngredient] = useState([]);

     useEffect(() => {
          async function getAllAlcDrinks() {
               const response = await fetchAllAlcDrinks();
               console.log(
                    "response in getAllAlcDrinks on CDB Drink Card ",
                    response
               );
               setAlcDrinks(response.drinks);
               //    console.log("alc drinks in the useEffect", alcDrinks);
          }
          getAllAlcDrinks();
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
     console.log("nonAlcDrinks after useEffect", nonAlcDrinks);
     const ingredient = "Milk";

     useEffect(() => {
          async function getCocktailsByIngredient() {
               const response = await fetchCocktailsByIngredient(ingredient);
               console.log("response in getCocktailsByIngredient on CDB Drink Card", response);
               setByIngredient(response.drinks);
          }
          getCocktailsByIngredient();
     }, []);
     console.log("byIngredient after useEffect", byIngredient);

     return <section>
          {nonAlcDrinks.map((drink) => {
               return (
                    <section>
                         <p>
                              {drink.strDrink}
                         </p>
                    </section>
               )
          })}

     </section>;
}
