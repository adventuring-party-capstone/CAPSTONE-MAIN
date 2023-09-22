import { useState, useEffect } from "react";
import { fetchAllDrinks } from "../../fetching/local";

export default function AllDrinks() {
     const [allDrinks, setAllDrinks] = useState([]);

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

     return (
          <section id="all-drinks">
               <h3>All Dranks</h3>
               <div>
                    {allDrinks.map((drink) => {
                         return (
                              <div key={drink.drinks_id}>
                                   <p>{drink.drinks_name}</p>
                                   <br />
                              </div>
                         );
                    })}
               </div>
          </section>
     );
}
