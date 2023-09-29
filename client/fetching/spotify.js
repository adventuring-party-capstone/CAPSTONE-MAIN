const base_url = "https://api.spotify.com/v1/search?q=";
const spotifyToken = "BQD6zKgZG6xQlYRVsbxbcUIjfbwIEhS2HVJcYIiDtOcaOroFJ4TxI8WWJVFQdtfb4iKOH7DYCTIJ1_Ep6YTy1lkutZSTvcB_sRYd7rlkqpFrEMkEzes";

// grabs artist object from spotify search endpoint
export const fetchArtistSearch = async (artistInput) => {
    try {
        console.log("...starting to fetch artist");
        const response = await fetch(`${base_url}${artistInput}&type=artist`, {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                "Authorization": `Bearer ${spotifyToken}`
            }
        });
        const result = await response.json();
        console.log("result", result);
        // console.log("result.artists.items", result.artists.items);
        const genreArray = result.artists.items[0].genres;
        console.log("genreArray", genreArray);
        const foundGenre = genreArray.find((ele) =>
            ele.includes('r')
        );
        console.log("foundGenre", foundGenre);
        return genreArray;
    } catch (error) {
        console.error("Cannot fetch artistSearch", error);
    }
};

// return genreArray from fetchArtistSearch

// import fetchAllGenres from local.js

// define another function in useEffect and that function should call fetchAllGenres from local.js
// function takes in genreArray as an argument
// compare genreArray with genresSetState from component
// the first genre from genreArray that matches the first genre from genreSetState (use find or filter)
// that will be the genre we want to return drinks for




// in component, fetchAllGenres
// set a setState for result from fetchAllGenres
