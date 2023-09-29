import { useState, useEffect } from "react";
import {
     fetchAllAlcDrinks,
     fetchAllNonAlcDrinks,
} from "../../fetching/cocktaildb";

export default function CocktailDBDrinkCard() {
     const [alcDrinks, setAlcDrinks] = useState([]);
     const [nonAlcDrinks, setNonAlcDrinks] = useState([]);

     useEffect(() => {
          async function getAllAlcDrinks() {
               const response = await fetchAllAlcDrinks();
               console.log(
                    "response in getAllAlcDrinks on CDB Drink Card ",
                    response
               );
               setAlcDrinks(response);
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
               setNonAlcDrinks(response);
               console.log("nonAlcDrinks in useEffect", nonAlcDrinks);
          }
          getAllNonAlcDrinks();
     }, []);

     return <section></section>;
}
