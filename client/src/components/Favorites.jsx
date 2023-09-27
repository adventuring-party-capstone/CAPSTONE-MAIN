// this component renders drink favorites

import { useEffect, useState } from "react";
import {
  fetchUsersDrinksByUserId,
  fetchAllDrinks,
  fetchSingleUser,
} from "../../fetching/local";
import DeleteFavorite from "./DeleteFavorite";

export default function Favorites({ token, userId }) {
  const [usersFavorites, setUsersFavorites] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [username, setUsername] = useState("");

  console.log("userId in favorites", userId);

  // grabbing logged in users' favorites from users_drinks junction table
  useEffect(() => {
    async function getSingleUserDrinks() {
      console.log("userId in get single user drinks ", userId);
      const response = await fetchUsersDrinksByUserId(userId);
      console.log("response inside get single user's drinks: ", response);

      try {
        if (response) {
          setUsersFavorites(response);
        }
      } catch (error) {
        console.error("can't get single user's favorites", error);
      }
    }
    getSingleUserDrinks();
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

  // grab user info (get user object by user id)
  useEffect(() => {
    async function getSingleUserProfile() {
      console.log("entering GSUP");
      const response = await fetchSingleUser(userId);
      console.log("response in GSUP", response);

      try {
        if (response) {
          setUsername(response.username);
        }
      } catch (error) {
        console.error("can't get user info", error);
      }
    }
    getSingleUserProfile();
  }, []);

  // mapping through drinks to match with the ones that are favorited
  const usersFavoriteDrinksId = [];

  usersFavorites.map((userFavorite) => {
    usersFavoriteDrinksId.push(userFavorite.drinks_id);
  });

  // map through usersFavorites
  // push usersFavorites.drinks_id into usersFavoriteDrinksId array
  // in the return statement, then map over drinks
  // if the drinks.drinks_id is inside usersFavoriteDrinksId
  // then display drink.drinks_name etc

  return (
    // remember to Number() the userId we are getting from localStorage
    <section>
      {token && (
        <div>
          <div>
            <h1>{username}'s FAVORITES</h1>
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
                      id="images"
                    />
                    <DeleteFavorite drinks_id={drink.drinks_id} />;
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
}
