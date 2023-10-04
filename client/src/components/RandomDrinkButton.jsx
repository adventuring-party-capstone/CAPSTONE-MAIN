import { fetchRandomDrink } from "../../fetching/randomdrink";
import RandomDrink from "./RandomDrink";

// export default function RandomDrinkButton() {
//   async function newRandomDrink(event) {
//     event.preventDefault();
//     try {
//       await RandomDrink();
//     } catch (error) {
//       console.error("well ya darn messed up", error);
//     }
//   }
//   return (
//     <>
//       <div className="random">{RandomDrink.strId}</div>
//       <div className="Random-Button">
//         <button onClick={newRandomDrink}>Random Drink! :3</button>
//       </div>
//     </>
//   );
// };
export default function RandomDrinkButton() {
  async function newRandomDrink() {
    // event.preventDefault();
    // this works and grabs the object info!! V
    try {
      await RandomDrink();
    //   RandomDrink();
    } catch (error) {
      console.error("well ya darn messed up", error);
    }
  }
  newRandomDrink();
  //   KEEP THIS
  return (
    <>
      {/* Button */}
      <div className="random">{RandomDrink.strId}</div>
      <div className="Random-Button">
        <button onClick={fetchRandomDrink}>Random Drink! :3</button>
      </div>
    </>
  );
}
//   onClick={newRandomDrink}
