// This component renders the homepage

export default function Home() {
	return (
		<div id="home-container">
			<h1>HOMEPAGE HERE</h1>
		</div>
	);
}

// need a search bar
// when someone searches genre id
// save that search param in a variable
// look inside genres_ingredients junction table
// get an array of ingredients matching that genre

// API: get all drinks with ingredient
// localdb: get all drinks with ingredient matching ingredient_id in genres_ingredients junction table

// render a single drink from the array of drinks matching ingredient on button click,
// when someone clicks again it goes to the next drink

// watch out! for duplicate drinks with external API
