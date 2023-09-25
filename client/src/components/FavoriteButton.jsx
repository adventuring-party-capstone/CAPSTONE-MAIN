// This component handles the favorites button

import { useNavigate } from "react-router-dom";
import { createNewFavorite } from "../../fetching/local";

export default function FavoriteButton({drinkId, userId}) {
 //const drinkIdFav = drinkId;

 //const navigate = useNavigate();

 async function handleSubmit(event) {
  event.preventDefault();

  try {
   await createNewFavorite(userId, drinkId);
   //navigate(0);
  } catch (error) {
   console.error(error);
  }
 }
 return (
  <div>
   <button onClick={handleSubmit} id="favorite-button">
    Add To Favorites
   </button>
  </div>
 );
}