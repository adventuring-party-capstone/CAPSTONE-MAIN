// This component grabs data from spotify for use on front end

import { useEffect, useState } from "react";
import { fetchArtistSearch } from "../../fetching/spotify.js";
import { fetchAllGenres } from "../../fetching/local.js";

export default function Spotify() {
	const [localGenres, setLocalGenres] = useState([]);
	const [artistGenres, setArtistGenres] = useState([]);

	// fetch all genres from local API
	useEffect(() => {
		async function getAllGenres() {
			console.log("entering getAllGenres in Spotify component");

			try {
				const localDatabaseGenre = await fetchAllGenres();
				setLocalGenres(localDatabaseGenre);
			} catch (error) {
				console.error("can't get all genres ", error);
			}
		}
		getAllGenres();
	}, []);

	// fetch genre from spotify API based on user input for artist
	useEffect(() => {
		async function getSpotifyGenre() {
			console.log("entering getSpotifyGenres");
			try {
				const APIArtistGenre = await fetchArtistSearch("beyonce");
				setArtistGenres(APIArtistGenre);
			} catch (error) {
				console.error("can't get all genres ", error);
			}
		}
		getSpotifyGenre();
	}, []);

	function compareGenres() {
		// grab first genre from the spotify genre array for the artist
		console.log("entering compareGenres");

		// loop through genres in the artist genre array
		// loop through genres in the seedData genres array
		// return the first one that matches (.find())

		for (let i = 0; i < artistGenres.length; i++) {
			//  first iteration: r&b
			console.log("current artist genre", artistGenres[i]);
			for (let j = 0; j < localGenres.length; j++) {
				console.log("current local genre", localGenres[j].genres_name);

				if (
					artistGenres[i].includes(localGenres[j].genres_name.toLowerCase())
				) {
					console.log("localGenre in loop", localGenres[j]);
					return localGenres[j];
				}
			}
		}
	}

	// compare the local genres with the spotify artist genre
	useEffect(() => {
		console.log("entering compare genres useEffect");
		console.log("localGenres in compare UE", localGenres);
		console.log("artist genres in UE", artistGenres);
		async function compareArtistGenres() {
			try {
				const foundGenre = compareGenres();
				console.log("found genre in UE", foundGenre);
			} catch (error) {
				console.error(error);
			}
		}
		compareArtistGenres();
	}, [artistGenres, localGenres]);
}
