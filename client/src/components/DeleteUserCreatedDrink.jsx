// This component handles the delete function for a drink that the user created

import { deleteDrink } from "../../fetching/local";
import { useNavigate } from "react-router-dom";

export default function DeleteUserCreatedDrink({ drinks_id }) {
    const nav = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            drinks_id && (await deleteDrink(drinks_id));
            nav(0);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <button
                onClick={handleSubmit}
                id="clear-button"
                class="glow-on-hover"
            >
                Delete Drink
            </button>
        </div>
    );
}
