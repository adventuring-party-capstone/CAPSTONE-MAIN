// This component renders a single drink details card
// ingredients
// alcoholic or no

// drinks_name: "Thai Iced Coffee",
//           ingredients: "Coffee",
//           recipe: "",
//           image: "https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
//           glass: "",

import { useEffect, useState } from "react";
import { fetchCocktailById } from "../../fetching/cocktaildb";

export default function SingleDrinkDetails({ drinkId }) {
     const [cocktail, setCocktail] = useState([]);

     useEffect(() => {
          async function getCocktailById() {
               const response = await fetchCocktailById(drinkId);
               console.log("response from FCBI", response);
               if (response) {
                    setCocktail(response.drinks[0]);
               } else {
                    console.log("can't get single drink details");
               }
          }
          getCocktailById();
     }, [drinkId]);

     return (
          <section>
               {cocktail && (
                    <div>
                         {/* <h3>Name: {cocktail.strDrink}</h3>
					<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /> */}
                         <h4>
                              Ingredients:{cocktail.strMeasure1}{" "}
                              {cocktail.strIngredient1},{cocktail.strMeasure2}{" "}
                              {cocktail.strIngredient2}
                         </h4>
                         <p>Instructions: {cocktail.strInstructions}</p>
                    </div>
               )}
          </section>
     );
}
