// this component handles the editing of a physical instrument

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editDrink } from "../../fetching/local";
import { TextField, InputLabel, Select, MenuItem } from "@mui/material";

export default function EditUserDrink({ drinkId }) {
     const [isOpen, setIsOpen] = useState(false);
     const [drinks_name, setDrinks_name] = useState("");
     const [ingredients, setIngredients] = useState("");
     const [recipe, setRecipe] = useState("");
     const [image, setImage] = useState("");
     const [glass, setGlass] = useState("");
     const [alcoholic, setAlcoholic] = useState(false);

     const navigate = useNavigate();

     const drink_id = drinkId;

     function handleClick() {
          setIsOpen(!isOpen);
     }

     const handleChange = (e) => {
          setAlcoholic(e.target.value);
     };

     async function handleEdit() {
          event.preventDefault();

          let drinkData = {
               drinks_name: drinks_name,
               ingredients: ingredients,
               recipe: recipe,
               image: image,
               glass: glass,
               alcoholic: alcoholic,
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
               <button onClick={handleClick} id="edit-button">
                    Edit Drink
               </button>
               {isOpen && (
                    <div>
                         <h2>Edit Drink</h2>
                         <form onSubmit={handleEdit}>
                              <TextField
                                   autoFocus
                                   label="Drink Name"
                                   value={drinks_name}
                                   onChange={(e) =>
                                        setDrinks_name(e.target.value)
                                   }
                              />
                              <TextField
                                   autoFocus
                                   label="Ingredients"
                                   value={ingredients}
                                   onChange={(e) =>
                                        setIngredients(e.target.value)
                                   }
                              />
                              <br />
                              <TextField
                                   autoFocus
                                   label="Recipe"
                                   value={recipe}
                                   onChange={(e) => setRecipe(e.target.value)}
                              />
                              <TextField
                                   autoFocus
                                   label="Image URL"
                                   placeholder="Please re-enter URL"
                                   value={image}
                                   onChange={(e) => setImage(e.target.value)}
                              />
                              <br />
                              <TextField
                                   autoFocus
                                   label="Glass"
                                   value={glass}
                                   onChange={(e) => setGlass(e.target.value)}
                              />
                              <br />
                              <InputLabel></InputLabel>
                              <div>Alcoholic?</div>
                              <Select
                                   className="inputField"
                                   value={alcoholic}
                                   type="text"
                                   name="alcoholic"
                                   placeholder="alcoholic"
                                   onChange={handleChange}
                              >
                                   <MenuItem value={false}>No</MenuItem>
                                   <MenuItem value={true}>Yes</MenuItem>
                              </Select>
                              <button type="submit">Submit</button>
                         </form>
                    </div>
               )}
          </div>
     );
}
