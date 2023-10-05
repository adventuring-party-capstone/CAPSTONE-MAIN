import { useState, useEffect } from "react";
import { fetchRandomDrink } from "../../fetching/randomdrink";

export default function RandomDrinkButton() {
  const [randomDrink, setRandomDrink] = useState([]);
  const getRandomDrink = async () => {
    const response = await fetchRandomDrink();
    console.log("response from fetchRandomDrink in getRandomDrink", response);
    //   const result = await response.json();
    setRandomDrink(response.drinks[0]);
  };

  function handleClick() {
    getRandomDrink();
  }
  //   KEEP THIS
  console.log("is this from my random drink component?", randomDrink);
  return (
    <>
      <div className="random">{randomDrink.strId}</div>
      <button onClick={handleClick}>Random Drink! :3</button>
      <div className="Random-Button">
        {/* {isOpen && <RandomDrink/>} */}
        {randomDrink && <img src={randomDrink.strDrinkThumb} />}
        {randomDrink && <h1>{randomDrink.strDrink}</h1>}
      </div>
    </>
  );
}
