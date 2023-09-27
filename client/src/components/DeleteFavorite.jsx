// This component handles the delete favorite function

import { deleteUserDrink } from "../../fetching/local";
import { useNavigate } from 'react-router-dom';

export default function DeleteFavorite({drinks_id}){
    const nav = useNavigate();
    async function handleSubmit(event){
        event.preventDefault();
        try {
            await deleteUserDrink(drinks_id);
            alert("Removed from favorites >:( ");
            nav(0);
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