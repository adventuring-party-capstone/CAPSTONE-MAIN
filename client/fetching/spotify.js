const base_url = "https://api.spotify.com/v1/search?q=";

export const fetchToken = async () => {
	try {
		console.log("...starting to fetch token");
		const response = await fetch(`https://accounts.spotify.com/api/token`, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: "grant_type=client_credentials&client_id=4dccf830e7fd42239b9a886f1fb2d848&client_secret=af5d14643f0f4eaeab32b2f0b93c71fa",
		});
		console.log("response from fetch token", response);
		const result = await response.json();
		console.log("result from fetch token", result);
		return result;
	} catch (error) {
		console.error("Cannot get token!");
	}
};

fetchToken();

// grabs artist object from spotify search endpoint
export const fetchArtistSearch = async (artistInput, spotifyToken) => {
	console.log("spotifyToken in fetch artist search", spotifyToken);
	try {
		console.log("...starting to fetch artist");
		const response = await fetch(`${base_url}${artistInput}&type=artist`, {
			method: "GET",
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Bearer ${spotifyToken}`,
			},
		});
		const result = await response.json();
		// console.log("result", result);
		// console.log("result.artists.items", result.artists.items);
		const genreArray = result.artists.items[0].genres;
		console.log("genreArray", genreArray);
		return genreArray;
	} catch (error) {
		console.error("Cannot fetch artistSearch", error);
	}
};
// hello test

// return genreArray from fetchArtistSearch

// import fetchAllGenres from local.js

// define another function in useEffect and that function should call fetchAllGenres from local.js
// function takes in genreArray as an argument
// compare genreArray with genresSetState from component
// the first genre from genreArray that matches the first genre from genreSetState (use find or filter)
// that will be the genre we want to return drinks for

// in component, fetchAllGenres
// set a setState for result from fetchAllGenres
