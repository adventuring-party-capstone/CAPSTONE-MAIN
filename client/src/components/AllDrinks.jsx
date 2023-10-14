import FavoriteButton from "./FavoriteButton";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { fetchAllDrinks } from "../../fetching/local";
import { fetchAllAlcDrinks } from "../../fetching/cocktaildb";
import { fetchAllNonAlcDrinks } from "../../fetching/cocktaildb";

import Box from "@mui/material/Box";
import { Pagination, Typography } from "@mui/material";

import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

const List = styled("ul")({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
});

import DetailsButton from "./DetailsButton";

export default function AllDrinks({ token, userId, dark }) {
    const [allDrinks, setAllDrinks] = useState([]);
    const [allAlcDrinks, setAllAlcDrinks] = useState([]);
    const [allNonAlcDrinks, setAllNonAlcDrinks] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [localArray, setLocalArray] = useState([]);
    const [APIArrayBig, setAPIArrayBig] = useState([]);
    const [combinedArray, setCombinedArray] = useState([]);
    const [isToggled, setIsToggled] = useState(false);
    const [alcIds, setAlcIds] = useState([]);

    // Pagination states
    const [page, setPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(18);
    const [totalPages, setTotalPages] = useState(1);
    const [APIArrayBigToDisplay, setAPIArrayBigToDisplay] = useState([]);
    const perPage = 20; // items per page

    useEffect(() => {
        async function getAllDrinks() {
            const drinks = await fetchAllDrinks();
            //    console.log("drinks ", drinks);
            //can also be a try/catch for more detailed error reporting
            if (drinks) {
                setAllDrinks(drinks);

                return drinks;
            } else {
                console.log("error fetching drinks");
            }
        }
        getAllDrinks();
    }, []);

    // getting all alc drinks from Cocktail DB
    useEffect(() => {
        async function getAllAlcDrinks() {
            const drinks = await fetchAllAlcDrinks();
            //    console.log("alc drinks", drinks);
            //can also be a try/catch for more detailed error reporting
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
            //    console.log("non alc drinks", drinks);
            //can also be a try/catch for more detailed error reporting
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
        // console.log("allAlcDrinks in UE", allAlcDrinks);
        // console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
        const twoArrays = allAlcDrinks.concat(allNonAlcDrinks);
        const sortedArray = twoArrays.sort(function (a, b) {
            if (a.strDrink < b.strDrink) {
                return -1;
            }
            if (a.strDrink > b.strDrink) {
                return 1;
            }
            return 0;
        });
        //   console.log("twoArrays", twoArrays);
        setCombinedArray(sortedArray);
    }, [allAlcDrinks, allNonAlcDrinks]);

    function handleSwitch(event) {
        setIsToggled(event.target.checked);
    }

    // calculating total pages
    useEffect(() => {
        // console.log("APIArray in useEffect", APIArrayBig);
        // console.log("localArray in useEffect", localArray);

        if (APIArrayBig && localArray) {
            let totalBothLength = APIArrayBig.length + localArray.length;
            // console.log("API + local arrays length", totalBothLength);
            setTotalPages(Math.ceil(totalBothLength / perPage));
        }
    }, [APIArrayBig, localArray]);

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
        allDrinks.filter((drink) => {
            // filtering alcoholic drinks
            if (drink.alcoholic && isToggled) {
                setLocalArray(allDrinks);
            } else if (!drink.alcoholic && !isToggled) {
                nonAlcArray.push(drink);
                console.log("nonAlcArray", nonAlcArray);
                setLocalArray(nonAlcArray);
            }
        });
    }, [allDrinks, isToggled]);

    // API array based on the toggle behavior
    const APIArray = [];
    useEffect(() => {
        //   console.log("combinedArray in UE", combinedArray);
        //   console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
        // console.log("APIArray in UE", APIArray);
        // setAPIArray(nonAlcArray);
        if (isToggled) {
            APIArray.push(combinedArray);
            setAPIArrayBig(APIArray[0]);
            console.log("APIArray if isToggled", APIArray);
        } else if (!isToggled) {
            APIArray.push(allNonAlcDrinks);
            setAPIArrayBig(APIArray[0]);
            console.log("APIArray if !isToggled", APIArray);
        }

        // set first render array
        setAPIArrayBigToDisplay(APIArray[0].slice(0, perPage));
        // set total pages for pagination in return
        setTotalPages(Math.ceil(APIArray[0].length / perPage));
    }, [combinedArray, isToggled, allNonAlcDrinks]);

    useEffect(() => {
        let localLength = localArray.length;

        // page 1 behavior for toggle off
        if (localLength < perPage) {
            // less than 18 local nonalc drinks
            console.log("case initial 1");
            let currentLocalArray = localArray.slice(0, localLength);
            // console.log("currentLocalArray", currentLocalArray);
            let currentAPIArray = APIArrayBig.slice(0, perPage - localLength);
            let currentPageArray = currentLocalArray.concat(currentAPIArray);
            // console.log("currentPageArray", currentPageArray);
            setAPIArrayBigToDisplay(currentPageArray);
        } else if (localLength > perPage) {
            // more than 18 local nonalc drinks
            console.log("case initial 2");
            let currentPageArray = localArray.slice(0, perPage);
            setAPIArrayBigToDisplay(currentPageArray);
        }
    }, [localArray, APIArrayBig]);

    //pushing the ids from alcoholic drinks into an array
    const alcIdArray = [];
    useEffect(() => {
        for (let i = 0; i < allAlcDrinks.length; i++) {
            alcIdArray.push(allAlcDrinks[i].idDrink);
        }
        // console.log("alcIdArray inside UE", alcIdArray);
        setAlcIds(alcIdArray);
    }, [allAlcDrinks]);

    const drinksToDisplayAPI = searchParam
        ? APIArrayBig.filter((drink) =>
              drink.strDrink.toLowerCase().includes(searchParam)
          ).concat(
              localArray.filter((drink) =>
                  drink.drinks_name.toLowerCase().includes(searchParam)
              )
          )
        : APIArrayBigToDisplay;

    // HANDLES PAGINATION BEHAVIOR FOR LAZY LOADING
    const handleChange = (event, pageNum) => {
        setPage(pageNum);
        // console.log("page", pageNum);
        // console.log("totalPages", totalPages);

        // console.log("localArray in handleChange", localArray);
        // console.log("APIArrayBig in handleChange", APIArrayBig);

        let localLength = localArray.length;
        let localPages = Math.ceil(localLength / perPage); // number of the page where API & localArray begin to join
        let APILength = APIArrayBig.length;

        // console.log("localLength", localLength);
        // console.log("localPage", localPages);
        // console.log("APILength", APILength);

        // console.log("totalLength", totalLength);
        if (pageNum === 1 && !isToggled && localArray) {
            // page 1 behavior for toggle off
            console.log("Case 0A");
            if (localLength < perPage) {
                // less than 18 local nonalc drinks
                console.log("Case 0A1");
                let currentLocalArray = localArray.slice(0, localLength);
                let currentAPIArray = APIArrayBig.slice(
                    0,
                    perPage - localLength
                );
                let currentPageArray =
                    currentLocalArray.concat(currentAPIArray);
                // console.log("currentPageArray case 0", currentPageArray);
                setAPIArrayBigToDisplay(currentPageArray);
            } else if (localLength >= perPage) {
                // more than 18 local nonalc drinks
                console.log("Case 0A2");
                let currentPageArray = localArray.slice(0, perPage);
                setAPIArrayBigToDisplay(currentPageArray);
            }
        } else if (pageNum === 1 && isToggled && localArray) {
            // page 1 behavior for toggle on
            console.log("Case 0B");
            if (localLength < perPage) {
                // less than 18 local alc drinks
                let currentLocalArray = localArray.slice(0, localLength);
                let currentAPIArray = APIArrayBig.slice(
                    0,
                    perPage - localLength
                );
                let currentPageArray =
                    currentLocalArray.concat(currentAPIArray);
                // console.log("currentPageArray case 0", currentPageArray);
                setAPIArrayBigToDisplay(currentPageArray);
            } else if (localLength >= perPage) {
                // more than 18 local nonalc drinks
                let currentPageArray = localArray.slice(0, perPage);
                setAPIArrayBigToDisplay(currentPageArray);
            }
        } else if (pageNum > 1 && pageNum < totalPages) {
            // 1 < page < totalPages
            if (pageNum < localPages) {
                console.log("case 1");
                // if still within localArray length
                let currentPageArray = localArray.slice(
                    (pageNum - 1) * perPage,
                    pageNum * perPage
                );
                setAPIArrayBigToDisplay(currentPageArray);
                // setLocalCounter(localLength - perPage);
            } else if (pageNum === localPages) {
                console.log("case 2");
                // last page of localArray, start to join local drinks with API array drinks to be displayed
                let currentArrayLocal = localArray.slice(
                    (pageNum - 1) * perPage,
                    localLength
                );
                let currentArrayAPI = APIArrayBig.slice(
                    0,
                    perPage - currentArrayLocal.length
                );
                let currentPageArray =
                    currentArrayLocal.concat(currentArrayAPI);
                setAPIArrayBigToDisplay(currentPageArray);
            } else if (pageNum === localPages + 1) {
                console.log("case 3");
                // first full page of API array (no more localArrray)
                let APIStartIndex = perPage - (localLength % perPage);
                console.log("APIStartIndex in case 3", APIStartIndex);
                console.log("APIEndIndex in case 3", APIStartIndex + perPage);
                let currentPageArray = APIArrayBig.slice(
                    APIStartIndex,
                    APIStartIndex + perPage
                );
                // setAPICounter(APICounter + perPage);
                setAPIArrayBigToDisplay(currentPageArray);
            } else if (pageNum > localPages && pageNum != totalPages) {
                console.log("case 4");
                // outside the bounds of the localArray by at least 1 page
                let APIStartIndex =
                    (pageNum - 1) * perPage - (localLength % perPage);
                // console.log("APIStartIndex in case 4", APIStartIndex);
                let APIEndIndex = APIStartIndex + perPage;
                // console.log("APIEndIndex in case 4", APIEndIndex);
                let currentPageArray = APIArrayBig.slice(
                    APIStartIndex,
                    APIEndIndex
                );
                setAPIArrayBigToDisplay(currentPageArray);
            }
        } else if (pageNum == totalPages) {
            console.log("case 5");
            // behavior for the last page
            let APIStartIndex =
                (pageNum - 1) * perPage - (localLength % perPage);
            console.log("APIStartIndex for case 5", APIStartIndex);
            console.log("APIEndIndex for case 5", APILength);

            if (APILength < APIStartIndex) {
                setAPIArrayBigToDisplay([
                    {
                        drinks_name: "You've reached the end of the drinks.",
                        image: "https://i.ytimg.com/vi/pKGxY15P_d8/sddefault.jpg",
                    },
                ]);
            } else {
                let currentPageArray = APIArrayBig.slice(
                    APIStartIndex,
                    APILength
                );
                setAPIArrayBigToDisplay(currentPageArray);
            }
        }
    };

    return (
        <>
            <section id="all-drinks-container">
                <div id="all-drinks-header">
                    <h1>All Drinks</h1>
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
                    <h2>Search: </h2>
                    <input
                        id="formInput"
                        className="inputField"
                        type="text"
                        placeholder="Search all drink names"
                        onChange={(e) =>
                            setSearchParam(e.target.value.toLowerCase())
                        }
                    />
                </label>
                <div id="pagination">
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                        color="secondary"
                    />
                </div>
                <h2>🍸Key: Drink Contains Alcohol</h2>
                <div id="all-drinks-gallery">
                    {drinksToDisplayAPI?.map((drink) => {
                        const APIDrinkId = drink.idDrink;
                        return (
                            <div id="flip-card" key={drink.idDrink}>
                                <div id="flip-card-inner">
                                    <div id="flip-card-front">
                                        {drink.strDrink ? (
                                            <div id="name section">
                                                {alcIds.includes(
                                                    drink.idDrink
                                                ) ? (
                                                    <h1>
                                                        🍸
                                                        {drink.strDrink}
                                                    </h1>
                                                ) : (
                                                    <h1>{drink.strDrink}</h1>
                                                )}
                                            </div>
                                        ) : (
                                            drink.drinks_name && (
                                                <div id="name section">
                                                    {drink.alcoholic ? (
                                                        <h1>
                                                            🍸
                                                            {drink.drinks_name}
                                                        </h1>
                                                    ) : (
                                                        <h1>
                                                            {drink.drinks_name}
                                                        </h1>
                                                    )}
                                                </div>
                                            )
                                        )}
                                        <br />
                                        {drink.strDrinkThumb ? (
                                            <img
                                                src={drink.strDrinkThumb}
                                                alt={drink.strDrink}
                                                id="images"
                                            />
                                        ) : (
                                            drink.image && (
                                                <img
                                                    src={drink.image}
                                                    alt={drink.drinks_name}
                                                    id="images"
                                                />
                                            )
                                        )}
                                    </div>
                                    {/* API database drink */}
                                    {drink.idDrink && (
                                        <div id="flip-card-back">
                                            <h1>{drink.strDrink}</h1>

                                            {token && (
                                                <FavoriteButton
                                                    api_drinks_id={
                                                        drink.idDrink
                                                    }
                                                    userId={userId}
                                                />
                                            )}
                                            <DetailsButton
                                                drinkId={APIDrinkId}
                                            />
                                        </div>
                                    )}
                                    {/* local database drink */}
                                    {drink.drinks_id && (
                                        <div id="flip-card-back">
                                            <h1>{drink.drinks_name}</h1>
                                            {token && (
                                                <FavoriteButton
                                                    api_drinks_id={null}
                                                    drinkId={drink.drinks_id}
                                                    userId={userId}
                                                />
                                            )}
                                            <DetailsButton
                                                drinkId={drink.drinks_id}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id="pagination">
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                        color="secondary"
                    />
                </div>
                <button id="clear-button">
                    <a href="#top" style={{ "text-decoration": "none" }}>
                        {" "}
                        Back to Top
                    </a>
                </button>
                {dark ? (
                    <div id="video-home-dark">
                        <h1></h1>
                        <video autoPlay loop muted style={{ minWidth: "100%" }}>
                            <source src={DarkMode} type="video/mp4"></source>
                        </video>
                    </div>
                ) : (
                    <div id="video-home">
                        <video autoPlay loop muted style={{ minWidth: "100%" }}>
                            <source src={LightMode} type="video/mp4"></source>
                        </video>
                    </div>
                )}
            </section>
        </>
    );
}
