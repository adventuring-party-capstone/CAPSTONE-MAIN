import { useState, useEffect } from "react";
import { fetchRandomDrink } from "../../fetching/randomdrink";
import DetailsButton from "./DetailsButton";
import FavoriteButton from "./FavoriteButton";
import { fetchAllAlcDrinks } from "../../fetching/cocktaildb";
import SingleDrinkDetails from "./SingleDrinkDetails";

import LightMode from "../assets/day_mode_lemon.mp4";
import DarkMode from "../assets/dark_mode_firey_red.mp4";

export default function RandomDrinkButton({ userId, dark, token }) {
    const [randomDrink, setRandomDrink] = useState(null);
    const [alcArray, setAlcArray] = useState([]);
    const [alcIds, setAlcIds] = useState([]);

    const getRandomDrink = async () => {
        const response = await fetchRandomDrink();
        setRandomDrink(response.drinks[0]);
    };

    function handleClick() {
        getRandomDrink();
    }

    //getting all alcoholic drinks from the api
    useEffect(() => {
        async function getAlcoholicDrinks() {
            const alcDrinks = await fetchAllAlcDrinks();
            setAlcArray(alcDrinks.drinks);
        }
        getAlcoholicDrinks();
    }, []);

    //pushing the ids from alcoholic drinks into an array
    const alcIdArray = [];
    useEffect(() => {
        for (let i = 0; i < alcArray.length; i++) {
            alcIdArray.push(alcArray[i].idDrink);
        }
        setAlcIds(alcIdArray);
    }, [alcArray]);

    return (
        <section id="randomizer-container">
            <h1
                style={{
                    fontSize: "4rem",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
            >
                Drink Randomizer
            </h1>
            <h3
                style={{
                    fontSize: "2rem",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
            >
                Click to get a random drink card!
            </h3>
            <button onClick={handleClick} className="glow-on-hover-home">
                Random Drink!
            </button>
            <div className="Random-Button">
                {randomDrink ? (
                    <div id="random-drink-container">
                        <h3>🍸= Drink Contains Alcohol</h3>
                        <div className="flip-card">
                            <div id="snackbar">
                                <h1>Added to favorites</h1>
                            </div>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div id="name section">
                                        {alcIds.includes(
                                            randomDrink.idDrink
                                        ) ? (
                                            <h1>
                                                🍸
                                                {randomDrink.strDrink}
                                            </h1>
                                        ) : (
                                            <h1>{randomDrink.strDrink}</h1>
                                        )}
                                    </div>
                                    <br />
                                    {randomDrink && (
                                        <img
                                            src={randomDrink.strDrinkThumb}
                                            id="images"
                                        />
                                    )}
                                </div>
                                <div className="flip-card-back">
                                    {randomDrink && (
                                        <h1>{randomDrink.strDrink}</h1>
                                    )}
                                    {randomDrink.strDrinkThumb && (
                                        <DetailsButton
                                            drinkId={randomDrink.idDrink}
                                        />
                                    )}
                                    {token && randomDrink.strDrinkThumb && (
                                        <FavoriteButton
                                            userId={userId}
                                            api_drinks_id={randomDrink.idDrink}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {dark ? (
                <div className="video-home-dark" id="video-home-dark-mobile">
                    <h1></h1>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ minWidth: "100%" }}
                    >
                        <source src={DarkMode} type="video/mp4"></source>
                    </video>
                </div>
            ) : (
                <div className="video-home" id="video-home-light-mobile">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ minWidth: "100%" }}
                    >
                        <source src={LightMode} type="video/mp4"></source>
                    </video>
                </div>
            )}
        </section>
    );
}
