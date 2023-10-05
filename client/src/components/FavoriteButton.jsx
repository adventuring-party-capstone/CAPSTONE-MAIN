// This component handles the favorites button

import { useNavigate } from "react-router-dom";
import { createNewFavorite } from "../../fetching/local";

export default function FavoriteButton({ drinkId, userId, api_drinks_id }) {
	// console.log("userId in FavoriteButton: ", userId);

	//  const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			await createNewFavorite(userId, drinkId, api_drinks_id);
			alert("Added to Favorites :D");
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div>
			<button
				onClick={handleSubmit}
				id="favorite-button"
				className="glow-on-hover"
			>
				Add To Favorites
			</button>
		</div>
	);
}
