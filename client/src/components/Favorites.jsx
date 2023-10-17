// this component renders drink favorites

import { useEffect, useState } from "react";
import {
    fetchUsersDrinksByUserId,
    fetchAllDrinks,
    fetchSingleUser,
} from "../../fetching/local";
import { fetchAllAlcDrinks } from "../../fetching/cocktaildb";
import { fetchAllNonAlcDrinks } from "../../fetching/cocktaildb";
import DeleteFavorite from "./DeleteFavorite";
import DetailsButton from "./DetailsButton";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

import defaultPhoto from "../assets/empty-glass.jpg";

export default function Favorites({ token, userId }) {
    const [usersFavorites, setUsersFavorites] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [allAlcDrinks, setAllAlcDrinks] = useState([]);
    const [allNonAlcDrinks, setAllNonAlcDrinks] = useState([]);
    const [username, setUsername] = useState("");
    const [searchParam, setSearchParam] = useState("");
    const [localArray, setLocalArray] = useState([]);
    const [APIArrayBig, setAPIArrayBig] = useState([]);
    const [combinedArray, setCombinedArray] = useState([]);
    const [isToggled, setIsToggled] = useState(true);
    const [alcIds, setAlcIds] = useState([]);

    // grab all drinks from drinks table
    useEffect(() => {
        async function getAllDrinks() {
            const response = await fetchAllDrinks();

            try {
                if (response) {
                    setDrinks(response);
                }
            } catch (error) {
                console.error("can't get all drinks", error);
            }
        }
        getAllDrinks();
    }, []);

    // getting all alc drinks from Cocktail DB
    useEffect(() => {
        async function getAllAlcDrinks() {
            const drinks = await fetchAllAlcDrinks();
            if (drinks) {
                setAllAlcDrinks(drinks.drinks);
            } else {
                console.log("error fetching alcoholic drinks");
            }
        }
        getAllAlcDrinks();
    }, []);

    // getting all non alc drinks from Cocktail DB
    useEffect(() => {
        async function getAllNonAlcDrinks() {
            const drinks = await fetchAllNonAlcDrinks();
            if (drinks) {
                setAllNonAlcDrinks(drinks.drinks);
            } else {
                console.log("error fetching non-alcoholic drinks");
            }
        }
        getAllNonAlcDrinks();
    }, []);

    // combining API alcoholic & nonalcoholic to get all API drinks
    useEffect(() => {
        const twoArrays = allAlcDrinks.concat(allNonAlcDrinks);

        setCombinedArray(twoArrays);
    }, [allAlcDrinks, allNonAlcDrinks]);

    // grabbing logged in users' favorites from users_drinks junction table
    useEffect(() => {
        async function getSingleUserDrinks() {
            const response = await fetchUsersDrinksByUserId(userId);

            try {
                if (response) {
                    setUsersFavorites(response);
                }
            } catch (error) {
                console.error("can't get single user's favorites", error);
            }
        }
        getSingleUserDrinks();
    }, [userId]);

    // grab user info (get user object by user id)
    useEffect(() => {
        async function getSingleUserProfile() {
            const response = await fetchSingleUser(userId);

            try {
                if (response) {
                    setUsername(response.username);
                }
            } catch (error) {
                console.error("can't get user info", error);
            }
        }
        getSingleUserProfile();
    }, [userId]);

    // mapping through drinks to match with the ones that are favorited
    const usersFavoriteDrinksId = [];
    const usersFavoritesDrinksIdAPI = [];

    usersFavorites.map((userFavorite) => {
        userFavorite.drinks_id &&
            usersFavoriteDrinksId.push(userFavorite.drinks_id);
    });

    usersFavorites.map((userFavorite) => {
        userFavorite.api_drinks_id &&
            usersFavoritesDrinksIdAPI.push(userFavorite.api_drinks_id);
    });

    // TOGGLE LOGIC
    function handleSwitch(event) {
        setIsToggled(event.target.checked);
    }

    // Alcohol toggle
    const PinkSwitch = styled(Switch)(({ theme }) => ({
        "& .MuiSwitch-switchBase.Mui-checked": {
            color: pink[600],
            "&:hover": {
                backgroundColor: alpha(
                    pink[600],
                    theme.palette.action.hoverOpacity
                ),
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
            }
        });
    }, [drinks, isToggled]);

    // API array based on the toggle behavior
    const APIArray = [];
    useEffect(() => {
        if (isToggled) {
            APIArray.push(combinedArray);
            setAPIArrayBig(APIArray[0]);
        } else if (!isToggled) {
            APIArray.push(allNonAlcDrinks);
            setAPIArrayBig(APIArray[0]);
        }
    }, [combinedArray, isToggled, allNonAlcDrinks]);

    //pushing the ids from alcoholic drinks into an array
    const alcIdArray = [];
    useEffect(() => {
        for (let i = 0; i < allAlcDrinks.length; i++) {
            alcIdArray.push(allAlcDrinks[i].idDrink);
        }
        setAlcIds(alcIdArray);
    }, [allAlcDrinks]);

    const drinksToDisplay = searchParam
        ? localArray.filter(
              (drink) =>
                  drink.drinks_name.toLowerCase().includes(searchParam) ||
                  drink.ingredients.toLowerCase().includes(searchParam)
          )
        : localArray;

    const drinksToDisplayAPI = searchParam
        ? APIArrayBig.filter((drink) =>
              drink.strDrink.toLowerCase().includes(searchParam)
          )
        : APIArrayBig;

    // converts string to title case/sentence case for later display in rendering
    function titleCase(str) {
        str = str.toLowerCase().split(" ");
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(" ");
    }

    return (
        // remember to Number() the userId we are getting from localStorage
        <section>
            {token && (
                <div>
                    <div>
                        <br />
                        <h1>{titleCase(username)}'s Favorites</h1>
                    </div>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <PinkSwitch
                                    checked={isToggled}
                                    onChange={(event) => handleSwitch(event)}
                                />
                            }
                            label={
                                isToggled
                                    ? "Click to hide alcoholic drinks"
                                    : "Click to show both alcoholic and nonalcoholic drinks"
                            }
                        />
                    </FormGroup>
                    <label>
                        Search:{" "}
                        <input
                            id="formInput"
                            className="inputField"
                            type="text"
                            placeholder="Search user favorites"
                            onChange={(e) =>
                                setSearchParam(e.target.value.toLowerCase())
                            }
                        />
                    </label>
                    <h2>🍸 Key: Drink Contains Alcohol</h2>
                    <div id="favorites-gallery">
                        {drinksToDisplay
                            .filter((drink) =>
                                usersFavoriteDrinksId.includes(drink.drinks_id)
                            )
                            .map((drink) => {
                                const localDrinkId = drink.drinks_id;
                                return (
                                    <div key={drink.drinks_id} id="drink-card">
                                        <div
                                            className="flip-card"
                                            id="favorites-mobile-flip-card"
                                        >
                                            <div
                                                className="flip-card-inner"
                                                id="favorites-mobile-flip-card-inner"
                                            >
                                                <div
                                                    className="flip-card-front"
                                                    id="favorites-mobile-flip-card-front"
                                                >
                                                    <div id="snackbar">
                                                        Added to favorites
                                                    </div>

                                                    <h2>
                                                        {drink.alcoholic ==
                                                        true ? (
                                                            <h1>
                                                                {" "}
                                                                🍸
                                                                {
                                                                    drink.drinks_name
                                                                }
                                                            </h1>
                                                        ) : (
                                                            <h1>
                                                                {" "}
                                                                {
                                                                    drink.drinks_name
                                                                }
                                                            </h1>
                                                        )}
                                                    </h2>
                                                    <br />
                                                    {drink.image.includes(
                                                        "http"
                                                    ) ? (
                                                        <img
                                                            src={drink.image}
                                                            alt={
                                                                drink.drinks_name
                                                            }
                                                            id="images"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={defaultPhoto}
                                                            alt={
                                                                drink.drinks_name
                                                            }
                                                            id="images"
                                                        />
                                                    )}
                                                </div>

                                                <div
                                                    className="flip-card-back"
                                                    id="favorites-mobile-flip-card-back"
                                                >
                                                    <h1>{drink.drinks_name}</h1>
                                                    <DetailsButton
                                                        drinkId={localDrinkId}
                                                    />
                                                    <DeleteFavorite
                                                        drinks_id={
                                                            drink.drinks_id
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        {drinksToDisplayAPI
                            .filter((drink) =>
                                usersFavoritesDrinksIdAPI.includes(
                                    Number(drink.idDrink)
                                )
                            )
                            .map((drink) => {
                                const APIDrinkId = drink.idDrink;
                                return (
                                    <div key={drink.idDrink} id="drink-card">
                                        <div
                                            className="flip-card"
                                            id="favorites-mobile-flip-card"
                                        >
                                            <div
                                                className="flip-card-inner"
                                                id="favorites-mobile-flip-card-inner"
                                            >
                                                <div
                                                    className="flip-card-front"
                                                    id="favorites-mobile-flip-card-front"
                                                >
                                                    <div id="name section">
                                                        {alcIds.includes(
                                                            drink.idDrink
                                                        ) ? (
                                                            <div>
                                                                <h1>
                                                                    🍸
                                                                    {
                                                                        drink.strDrink
                                                                    }
                                                                </h1>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <h1>
                                                                    {
                                                                        drink.strDrink
                                                                    }
                                                                </h1>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <br />
                                                    <img
                                                        src={
                                                            drink.strDrinkThumb
                                                        }
                                                        alt={drink.strDrink}
                                                        id="images"
                                                    />
                                                </div>
                                                <div
                                                    className="flip-card-back"
                                                    id="favorites-mobile-flip-card-back"
                                                >
                                                    <h1>{drink.strDrink}</h1>
                                                    <div>
                                                        <DetailsButton
                                                            drinkId={APIDrinkId}
                                                        />
                                                    </div>
                                                    <DeleteFavorite
                                                        api_drinks_id={
                                                            drink.idDrink
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </section>
    );
}
