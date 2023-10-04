//       へ   ♡   ╱|、
//     ૮ - ՛)     (` - 7
//     /⁻ ៸|      |、⁻〵
//  乀(ˍ,ل ل      じしˍ,)ノ
// :3 RANDOM BUTTON <3

// API route for random drink (changes on click)
import { useEffect, useState } from "react";
import { fetchRandomDrink } from "../../fetching/randomdrink";

// const randomDrinkAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export default function RandomDrink() {
  console.log("what is happening?");
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
    async function propRandomDrink(){
        try {
            const response = await  fetchRandomDrink();
            setRandomDrink(response)
        } catch (error) {
            console.error("Random drink comonent err", error)
        }

    }propRandomDrink();
    const getRandomDrink = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php/drink`
      );
      const result = await response.json();
      setRandomDrink(result);
    };
    getRandomDrink();
  }, []);
  console.log("is this from my random drink component?", randomDrink.drinks);
};

// ＿＿
// 　　　　　🌸＞　　 フ
// 　　　　　| 　_　 _l
// 　 　　　／` ミ＿x ノ
// 　　 　 /　　　 　|
// 　　　 /　 ヽ　　 ﾉ
// 　 　 │　　|　|　|
// 　／￣|　　 |　|　|
// 　| (￣ヽ＿_ヽ_)__)
// 　＼二つ;
// 1PELU1134qazub9a4GtJel (id)