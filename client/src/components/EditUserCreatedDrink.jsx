import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editDrink, fetchSingleDrink } from "../../fetching/local";
import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export default function EditUserDrink({ drinkId }) {
     const [isOpen, setIsOpen] = useState(false);
     const [drink, setDrink] = useState({});

     const navigate = useNavigate();

     const drink_id = drinkId;

     function handleClick() {
          setIsOpen(!isOpen);
     }

     useEffect(() => {
          async function fetchDrinkData() {
               try {
                    const response = await fetchSingleDrink(drink_id);
                    console.log("fetched drink data:", response);
                    setDrink(response);
               } catch (error) {
                    console.error("error fetching drink:", error);
               }
          }
          fetchDrinkData();
     }, []);

     async function handleEdit(event) {
          event.preventDefault();

          let drinkData = {
               drinks_name: drink.drinks_name,
               ingredients: drink.ingredients,
               recipe: drink.recipe,
               image: drink.image,
               alcoholic: drink.alcoholic,
          };

          try {
               await editDrink(drinkData, drink_id);
               navigate(0);
          } catch (err) {
               console.error("can't edit drink", err);
          }
     }

     return (
          <div>
               <button onClick={handleClick} id="clear-button">
                    Edit Drink
               </button>
               {isOpen && (
                    <div>
                         <h1>Edit Drink</h1>
                         <form onSubmit={handleEdit}>
                              <TextField
                                   autoFocus
                                   label="Drink Name"
                                   value={
                                        drink.drinks_name
                                             ? drink.drinks_name
                                             : ""
                                   }
                                   onChange={(e) =>
                                        setDrink({
                                             ...drink,
                                             drinks_name: e.target.value,
                                        })
                                   }
                              />
                              <br />
                              <br />
                              {/* find expanding field for ingredeints and recipes */}

                              <TextField
                                   multiline
                                   rows={4}
                                   maxRows={6}
                                   autoFocus
                                   label="Ingredients"
                                   value={drink.ingredients || ""}
                                   onChange={(e) =>
                                        setDrink({
                                             ...drink,
                                             ingredients: e.target.value,
                                        })
                                   }
                              />
                              <br />
                              <br />
                              <TextField
                                   autoFocus
                                   label="Recipe"
                                   multiline
                                   rows={4}
                                   maxRows={6}
                                   value={drink.recipe || ""}
                                   onChange={(e) =>
                                        setDrink({
                                             ...drink,
                                             recipe: e.target.value,
                                        })
                                   }
                              />
                              <br />
                              <br />
                              <TextField
                                   autoFocus
                                   label="Image URL"
                                   placeholder="Image URL"
                                   value={drink.image || ""}
                                   onChange={(e) =>
                                        setDrink({
                                             ...drink,
                                             image: e.target.value,
                                        })
                                   }
                              />

                              <br />
                              <br />
                              <InputLabel></InputLabel>
                              <div>Alcoholic?</div>
                              <Select
                                   className="inputField"
                                   value={drink.alcoholic || false}
                                   type="text"
                                   name="alcoholic"
                                   placeholder="alcoholic"
                                   onChange={(e) => {
                                        setDrink({
                                             ...drink,
                                             alcoholic: e.target.value,
                                        });
                                   }}
                              >
                                   <MenuItem value={false}>No</MenuItem>
                                   <MenuItem value={true}>Yes</MenuItem>
                              </Select>
                              <button type="submit" id="clear-button">
                                   Submit
                              </button>
                         </form>
                    </div>
               )}
          </div>
     );
}
