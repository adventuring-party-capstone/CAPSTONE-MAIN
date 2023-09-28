// This component handles the favorites button

import { useNavigate } from "react-router-dom";
import { createNewFavorite } from "../../fetching/local";

export default function FavoriteButton({ drinkId, userId }) {
	console.log("userId in FavoriteButton: ", userId);

	//  const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			await createNewFavorite(userId, drinkId);
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
