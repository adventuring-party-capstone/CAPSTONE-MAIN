import FavoriteButton from "./FavoriteButton.jsx";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const [localArray, setLocalArray] = useState([]);
const [isToggled, setIsToggled] = useState(false);

// TOGGLE LOGIC
function handleSwitch(event) {
    setIsToggled(event.target.checked);
}

// Alcohol toggle
const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: pink[600],
        "&:hover": {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: pink[600],
    },
}));

// local DB array splitting alcoholic/non-alcoholic
const nonAlcArray = [];
useEffect(() => {
    drinks.filter((drink) => {
        // filtering alcoholic drinks
        if (drink.alcoholic && isToggled) {
            setLocalArray(drinks);
        } else if (!drink.alcoholic && !isToggled) {
            nonAlcArray.push(drink);
            setLocalArray(nonAlcArray);
            console.log("localArray", localArray)
        }
    });
}, [drinks, isToggled]);


return (
    <div>
        {matchedGenres && <h1>Found genre: {matchedGenres.genres_name}</h1>}
        <FormGroup>
            <FormControlLabel
                control={
                    <PinkSwitch
                        checked={isToggled}
                        onChange={(event) => handleSwitch(event)}
                    />
                }
                label="Show alcoholic drinks"
            />
        </FormGroup>
        {matchedGenres && (
            <div>
                {localArray
                    .filter((drink) =>
                        filtered_ingredients_names.includes(drink.ingredients)
                    )
                    .map((drink) => {
                        const drinkId = drink.drinks_id;
                        return (
                            <>
                                <div id="each-drink" key={drink.drinks_id}>
                                    <h3>{drink.drinks_name}</h3>
                                    <img src={drink.image}></img>
                                    <FavoriteButton drinkId={drinkId} userId={userId} />
                                </div>
                            </>
                        );
                    })}
            </div>
        )}
    </div>
);