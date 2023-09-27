// This component handles the delete favorite function

import { deleteUserDrink } from "../../fetching/local";

export default function DeleteFavorite({drinks_id}){
    async function handleSubmit(event){
        event.preventDefault();
        try {
            await deleteUserDrink(drinks_id);
            alert("Removed from favorites >:( ");
        } catch (error) {
            console.error(error);
        }
    };
    return(
        <div>
        <button onClick={handleSubmit} id="delete-favorite-button">
            Remove From Favorites
        </button>
        </div>
    );
}