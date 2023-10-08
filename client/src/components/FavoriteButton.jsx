// This component handles the favorites button

import { useNavigate } from "react-router-dom";
import { createNewFavorite } from "../../fetching/local";
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import MuiAlert from '@mui/material/Alert';

function SlideTransition(props) {
	return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
	return <Grow {...props} />;
}
export default function FavoriteButton({ drinkId, userId, api_drinks_id }) {
	console.log("userId in FavoriteButton: ", userId);
	const [state, setState] = React.useState({
		open: false,
		Transition: Fade,
	});

	const handleClick = (Transition) => () => {
		setState({
			open: true,
			Transition,
		});
	};

	const handleClose = () => {
		setState({
			...state,
			open: false,
		});
	};

	//  const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			await createNewFavorite(userId, drinkId, api_drinks_id)
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<button
				onClick={(event) => {
					{
						handleSubmit(event);
						handleClick(GrowTransition)();
					}
				}}
				// onClick={handleSubmit} // if i just do handle submit, i wont get snackbar
				id="favorite-button"
				className="glow-on-hover"
			>
				Add To Favorites
			</button>
			<div>
				{/* <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
				<Button onClick={handleClick(Fade)}>Fade Transition</Button>
				<Button onClick={handleClick(SlideTransition)}>Slide Transition</Button> */}
				<Snackbar
					open={state.open}
					onClose={handleClose}
					TransitionComponent={state.Transition}
					message="Added to favorites"
					key={state.Transition.name}
				/>
			</div>
		</div>
	);
}
