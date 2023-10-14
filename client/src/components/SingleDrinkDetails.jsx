// This component renders a single drink details card

import { useEffect, useState } from "react";
import { fetchCocktailById } from "../../fetching/cocktaildb";
import { fetchSingleDrink } from "../../fetching/local";

export default function SingleDrinkDetails({ drinkId }) {
    const [cocktail, setCocktail] = useState([]);
    const [localDrink, setLocalDrink] = useState([]);
    const [APIDrinkIdSDD, setAPIDrinkIdSDD] = useState(null);
    const [localDrinkIdSDD, setLocalDrinkIdSDD] = useState(null);

    function routeDrinkId() {
        if (drinkId > 9000) {
            // if prop drinkId is a cocktailDB id
            setAPIDrinkIdSDD(drinkId);
        } else {
            // if prop drinkId is a local drinks id
            setLocalDrinkIdSDD(drinkId);
        }
    }

    // identifies drinkId in this component based on what prop is passed in
    useEffect(() => {
        console.log("drinkId at top level", drinkId);
        routeDrinkId();
    }, [drinkId]);

    // fetching drink details from cocktail API
    useEffect(() => {
        async function getCocktailById() {
            const response = await fetchCocktailById(APIDrinkIdSDD);
            // console.log("response from FCBI", response);
            if (response) {
                setCocktail(response.drinks[0]);
            } else {
                console.log("can't get single drink details");
            }
        }
        getCocktailById();
    }, [APIDrinkIdSDD]);

    // fetching drink details from local DB
    useEffect(() => {
        async function getLocalDrinkById() {
            if (APIDrinkIdSDD) {
                // case 1 - seedData
                const response = await fetchCocktailById(APIDrinkIdSDD);
                // console.log("response from FCBI in getLocalDrinkbyId", response);
                if (response) {
                    setLocalDrink(response.drinks[0]);
                } else {
                    console.log(
                        "can't get single local drink from cocktail API"
                    );
                }
            } else {
                // case 2 - user created drink
                const response = await fetchSingleDrink(localDrinkIdSDD);
                // console.log("response from FSD", response);
                if (response) {
                    setLocalDrink(response);
                } else {
                    console.log("can't get single drink from local DB");
                }
            }
        }
        getLocalDrinkById();
    }, [APIDrinkIdSDD, localDrinkIdSDD]);

    return (
        <section id="drink-card-inner">
            {cocktail && drinkId > 9000 && (
                <div>
                    <h1>Ingredients:</h1>
                    <h4>
                        {cocktail.strMeasure1} {cocktail.strIngredient1} {""}
                    </h4>
                    <h4>
                        {cocktail.strMeasure2} {cocktail.strIngredient2} {""}
                    </h4>
                    <h4>
                        {cocktail.strMeasure3 && cocktail.strMeasure3}
                        {cocktail.strIngredient3 &&
                            cocktail.strIngredient3}{" "}
                        {""}
                    </h4>
                    <h4>
                        {cocktail.strMeasure4 && cocktail.strMeasure4}
                        {cocktail.strIngredient4 &&
                            cocktail.strIngredient4}{" "}
                        {""}
                    </h4>
                    <h4>
                        {cocktail.strMeasure5 && cocktail.strMeasure5}
                        {cocktail.strIngredient5 &&
                            cocktail.strIngredient5}{" "}
                        {""}
                    </h4>
                    <h4>
                        {cocktail.strMeasure6 && cocktail.strMeasure6}
                        {cocktail.strIngredient6 &&
                            cocktail.strIngredient6}{" "}
                        {""}
                    </h4>
                    <h4>
                        {cocktail.strMeasure7 && cocktail.strMeasure7}
                        {cocktail.strIngredient7 &&
                            cocktail.strIngredient7}{" "}
                        {""}
                    </h4>
                    <h4>
                        {cocktail.strMeasure8 && cocktail.strMeasure8}
                        {cocktail.strIngredient8 &&
                            cocktail.strIngredient8}{" "}
                        {""}
                    </h4>
                    <h1>Glass: </h1>
                    <h4>{cocktail.strGlass}</h4>
                    <h1>Instructions:</h1> <h4>{cocktail.strInstructions}</h4>
                </div>
            )}
            {localDrink && drinkId < 9000 && (
                <div>
                    <h1>Ingredients:</h1>
                    <h4>{localDrink.ingredients}</h4>
                    <h1>Instructions: </h1>
                    <h4>{localDrink.recipe}</h4>
                </div>
            )}
        </section>
    );
}
