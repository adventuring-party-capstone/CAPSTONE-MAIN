// This component handles the favorites button

import { useNavigate } from "react-router-dom";
import { createNewFavorite } from "../../fetching/local";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import MuiAlert from "@mui/material/Alert";

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
    return <Grow {...props} />;
}
export default function FavoriteButton({ drinkId, userId, api_drinks_id }) {
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await createNewFavorite(userId, drinkId, api_drinks_id);
            myFunction();
        } catch (error) {
            console.error(error);
        }
    }

    function myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    }

    return (
        <div>
            <button
                onClick={(event) => {
                    {
                        handleSubmit(event);
                        myFunction();
                    }
                }}
                id="favorite-button"
                className="glow-on-hover"
            >
                Favorite
            </button>
        </div>
    );
}
