import { fetchArtistSearch } from "../../fetching/spotify.js";

import { fetchAllGenres } from "../../fetching/local.js";


const localDatabaseGenre = fetchAllGenres();
console.log("localDatabaseGenre", localDatabaseGenre);

const artistGenre = fetchArtistSearch("beyonce");
console.log("artistGenre", artistGenre);

