import React, { useState } from "react";
import { createDrink } from "../../fetching/local";
import { useNavigate } from "react-router-dom";
import { Input, Select, MenuItem } from "@mui/material";
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

export default function CreateNewDrink({ token, userId }) {
    const [drinksName, setDrinksName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [recipe, setRecipe] = useState("");
    const [image, setImage] = useState("");
    const [glass, setGlass] = useState("");
    const [alcoholic, setAlcoholic] = useState("");
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });
    const navigate = useNavigate();

    if (!token) {
        navigate("/login");
    }

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

    // console.log("userId in createnewdrink", userId);
    const userIdCND = Number(userId);
    // console.log("userIdCND", userIdCND);

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            console.log("..entering create drink handle submit");
            const createDrinkResult = await createDrink(
                null,
                drinksName,
                ingredients,
                recipe,
                image,
                null,
                alcoholic,
                userIdCND
            );
            console.log("API Data", createDrinkResult);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        setAlcoholic(e.target.value);
    };

    return (
        <div className="formGroup">
            <h1>Create Your Own Drink</h1>
            <br />
            <form id="drink-form">
                <input
                    id="formInput"
                    className="inputField"
                    value={drinksName}
                    type="text"
                    name="title"
                    placeholder="Drink name"
                    onChange={(e) => setDrinksName(e.target.value)}
                />
                <br />
                <input
                    id="formInput"
                    className="inputField"
                    value={image}
                    type="text"
                    name="title"
                    placeholder="Image URL"
                    onChange={(e) => setImage(e.target.value)}
                />
                <br />
                <textarea
                    cols={50}
                    rows={10}
                    id="formInput"
                    className="inputField"
                    value={ingredients}
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients"
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <br />
                <textarea
                    cols={50}
                    rows={10}
                    id="formInput"
                    className="inputField"
                    value={recipe}
                    type="text"
                    name="recipe"
                    placeholder="Recipe"
                    onChange={(e) => setRecipe(e.target.value)}
                />
                <br />
                <br />
                <div>
                    <h2>Alcoholic?</h2>
                </div>
                <Select
                    id="formInput"
                    className="inputField"
                    value={alcoholic}
                    type="text"
                    name="alcoholic"
                    placeholder="alcoholic"
                    onChange={handleChange}
                >
                    <MenuItem value={false}>No</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                </Select>
                <br />
                <br />
                <button
                    onClick={(e) => {
                        {
                            handleSubmit(e);
                            handleClick(GrowTransition)();
                        }
                    }}
                    id="pink-button"
                >
                    Submit
                </button>
            </form>
            <div>
                {/* <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
				<Button onClick={handleClick(Fade)}>Fade Transition</Button>
				<Button onClick={handleClick(SlideTransition)}>Slide Transition</Button> */}
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message="Congrats! You created a drink!"
                    key={state.Transition.name}
                />
            </div>
        </div>
    );
}
