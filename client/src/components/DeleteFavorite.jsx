// This component handles the delete favorite function

import { deleteUserDrink, deleteUserDrinkAPI } from "../../fetching/local";
import { useNavigate } from "react-router-dom";

export default function DeleteFavorite({ drinks_id, api_drinks_id }) {
     const nav = useNavigate();
     async function handleSubmit(event) {
          event.preventDefault();
          try {
               drinks_id && (await deleteUserDrink(drinks_id));
               api_drinks_id && (await deleteUserDrinkAPI(api_drinks_id));
               nav(0);
          } catch (error) {
               console.error(error);
          }
     }
     return (
          <div>
               <button onClick={handleSubmit} id="details-button">
                    Remove From Favorites
               </button>
          </div>
     );
}
