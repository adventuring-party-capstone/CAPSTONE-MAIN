// this component renders drink favorites

import { useEffect, useState } from "react";
import { fetchAllDrinks, fetchUsersDrinksByUserId } from "../../fetching/local";

export default function Favorites() {
     const [usersFavorites, setUsersFavorites] = useState([]);
     const [drinks, setDrinks] = useState([]);

     const users_id = 1;

     // grabbing all users' favorites from users_drinks junction table
     useEffect(() => {
          async function getAllUserDrinks() {
               const response = await fetchUsersDrinksByUserId(users_id);
               console.log("response inside get all users drinks: ", response);

               try {
                    if (response) {
                         setUsersFavorites(response);
                    }
               } catch (error) {
                    console.error("can't get all favorites", error);
               }
          }
          getAllUserDrinks();
     }, []);

     // grab all drinks from drinks table
     useEffect(() => {
          async function getAllDrinks() {
               const response = await fetchAllDrinks();
               console.log("response inside get all drinks ", response);

               try {
                    if (response) {
                         setDrinks(response);
                    }
               } catch (error) {
                    console.error("can't get all drinks", error);
               }
          }
          getAllDrinks();
     }, []);

     // mapping through drinks to match with the ones that are favorited
     const usersFavoriteDrinksId = [];
     // drinks.filter((drink) => {
     // 	usersFavorites.map((userFavorite) => {
     // 		userFavorite.drinks_id;
     // 	});
     // });

     usersFavorites.map((userFavorite) => {
          usersFavoriteDrinksId.push(userFavorite.drinks_id);
     });

     // map through usersFavorites
     // push usersFavorites.drinks_id into usersFavoriteDrinksId array
     // in the return statement, then map over drinks
     // if the drinks.drinks_id is inside usersFavoriteDrinksId
     // then display drink.drinks_name etc

     // map through drinks array
     // also map through users favorites at the same time?
     // for each drink, if drinks.drinks_id == usersFavorites.drinks_id
     // push drinks.drink into usersFavoritesDrinks (currently an empty array);

     return (
          <section>
               <div>
                    <h1>FAVORITES</h1>
               </div>
               <div>
                    {drinks
                         .filter((drink) =>
                              usersFavoriteDrinksId.includes(drink.drinks_id)
                         )
                         .map((drink) => {
                              return (
                                   <div key={drink.drinks_id}>
                                        <p>{drink.drinks_name}</p>
                                        <img
                                             src={drink.image}
                                             alt={drink.drinks_name}
                                        ></img>
                                   </div>
                              );
                         })}
               </div>
          </section>
     );
}
