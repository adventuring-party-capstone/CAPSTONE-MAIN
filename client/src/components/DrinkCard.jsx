import { useState, useEffect } from "react";
import { fetchAllDrinks, fetchAllGenresIngredients } from "../../fetching/local";


export default function DrinkCard({ musicChoice }) {
    const [drinks, setDrinks] = useState([]);
    const [junctionGenresIngredients, setJunctionGenresIngredients] = useState([]);

    // get all drinks
    useEffect(() => {
        async function getAllDrinks() {
            const response = await fetchAllDrinks();
            console.log(response);
            setDrinks(response);
            console.log('ALL DRINKS', response)
        }
        getAllDrinks();
    }, []);

    // get all genres_ingredients
    useEffect(() => {
        async function getAllGenresIngredients() {
            const junctionGenresIngredients = await fetchAllGenresIngredients();
            setJunctionGenresIngredients(junctionGenresIngredients);
            console.log('junctionGenresIngredients', junctionGenresIngredients);
        }
        getAllGenresIngredients();
    }, []);

    // getting associated corresponding ingredients_id from genres_id in junctionGenresIngredients
    const filtered_ingredients = [];

    {
        junctionGenresIngredients.map((junctionGenreIngredient) => {
            console.log('LOGGING FILTERED INGREDIENTS...')
            if (junctionGenreIngredient.genres_id == musicChoice) {
                filtered_ingredients.push(junctionGenreIngredient.ingredients_id);
                console.log("FILTERED INGREDIENTS", filtered_ingredients)
            }
        })

    };
    return (
        <>
            <div>
                <h1>DRINK CARD</h1>
                <h1>Filtered Ingredient ID {filtered_ingredients}</h1>
                {drinks
                    .filter((drink) => filtered_ingredients.includes(drink.drinks_id))
                    .map((drink) => {
                        return (
                            <>
                                <div id="each-drink">
                                    <h3>{drink.drinks_name}</h3>
                                    <img src={drink.image}></img>
                                </div>
                            </>
                        )
                    }
                    )}
            </div>
        </>
    )

}