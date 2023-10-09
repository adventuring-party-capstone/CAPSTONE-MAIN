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

import DetailsButton from "./DetailsButton";
import RandomDrinkButton from "./RandomDrinkButton";

export default function AllDrinks({ token, userId }) {
  const [allDrinks, setAllDrinks] = useState([]);
  const [allAlcDrinks, setAllAlcDrinks] = useState([]);
  const [allNonAlcDrinks, setAllNonAlcDrinks] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [localArray, setLocalArray] = useState([]);
  const [APIArrayBig, setAPIArrayBig] = useState([]);
  const [combinedArray, setCombinedArray] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    async function getAllDrinks() {
      const drinks = await fetchAllDrinks();
      console.log("drinks ", drinks);
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
      console.log("alc drinks", drinks);
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
      console.log("non alc drinks", drinks);
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
    console.log("allAlcDrinks in UE", allAlcDrinks);
    console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
    const twoArrays = allAlcDrinks.concat(allNonAlcDrinks);
    console.log("twoArrays", twoArrays);
    setCombinedArray(twoArrays);
  }, [allAlcDrinks, allNonAlcDrinks]);

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
    console.log("combinedArray in UE", combinedArray);
    console.log("allNonAlcDrinks in UE", allNonAlcDrinks);
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
  }, [combinedArray, isToggled, allNonAlcDrinks]);

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

  return (
    <section id="all-drinks-container">
      <h1>All Dranks</h1>
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
      <label>
        Search:{" "}
        <input
          id="search"
          className="inputField"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
        />
      </label>
      <div id="all-drinks-gallery">
        {drinksToDisplay.map((drink) => {
          const localDrinkId = drink.drinks_id;
          return (
            <div id="flip-card" key={drink.drinks_id}>
              <div id="flip-card-inner">
                <div id="flip-card-front">
                  <h2>{drink.drinks_name}</h2>
                  <img src={drink.image} alt={drink.drinks_name} id="images" />
                </div>
                <div id="flip-card-back">
                  <h1>{drink.drinks_name}</h1>
                  {token && (
                    <FavoriteButton drinkId={drink.drinks_id} userId={userId} />
                  )}
                  <DetailsButton drinkId={localDrinkId} /></div>
              </div>

            </div>
          );
        })}
        {drinksToDisplayAPI.map((drink) => {
          const APIDrinkId = drink.idDrink;
          return (
            <div id="flip-card" key={drink.idDrink}>
              <div id="flip-card-inner">
                <div id="flip-card-front">
                  <p>{drink.strDrink}</p>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} id="images" />
                </div>
                <div id="flip-card-back">
                  <h1>{drink.strDrink}</h1>
                  {token && (
                    <FavoriteButton api_drinks_id={drink.idDrink} userId={userId} />
                  )}
                  <DetailsButton drinkId={APIDrinkId} />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
