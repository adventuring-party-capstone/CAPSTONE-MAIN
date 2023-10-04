import React, { useState } from "react";
import { createDrink } from "../../fetching/local";
import { useNavigate } from "react-router-dom";
import { Input, Select, MenuItem } from "@mui/material";

export default function CreateNewDrink({ userId }) {
    // const [cocktails_db_drinks_id, setCookingTime] = useState("");
    // const [description, setDescription] = useState("")
    // const [is_vegetarian, setIsVegetarian] = useState(false);
    // const [portions, setPortions] = useState("")
    // const [title, setTitle] = useState(null);
    // // const [userId, setUserId] = useState(null);
    // const [video, setVideo] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            console.log("..entering create drink handle submit")
            const createDrinkResult = await createDrink(3, "winnie", "bubbles", "something", "something else", "something", true);
            console.log("API Data", createDrinkResult);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        setIsVegetarian(e.target.value);
    };

    return (
        <div className="formGroup">
            <h2>Create your own drink</h2>
            <form onSubmit={handleSubmit} >
                <button>Submit</button>
            </form>
            {/* <form onSubmit={handleSubmit}>
                <input
                    id="title"
                    className="inputField"
                    value={title}
                    type="text"
                    name="title"
                    placeholder="title of recipe"
                    onChange={(e) => setTitle(e.target.value)}
                /><br />
                <div>Cooking Time?</div><Input
                    className="inputField"
                    value={cookingTime}
                    type="number"
                    name="cookingTime"
                    onChange={(e) => setCookingTime(e.target.value)}
                /><br />
                <textarea cols={30} rows={10}
                    className="inputField"
                    value={portions}
                    type="text"
                    name="portions"
                    placeholder="ingredients needed"
                    onChange={(e) => setPortions(e.target.value)}
                /><br />
                <textarea cols={30} rows={10}
                    className="inputField"
                    value={description}
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                /><br />
                <div>Vegetarian?</div>
                <Select
                    className="inputField"
                    value={is_vegetarian}
                    type="text"
                    name="is_vegetarian"
                    placeholder="is_vegetarian"
                    onChange={handleChange}
                >
                    <MenuItem value={false}>No</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                </Select><br />
                <input
                    className="inputField"
                    value={video}
                    type="text"
                    name="video"
                    placeholder="video"
                    onChange={(e) => setVideo(e.target.value)}
                /><br />
                <br />
                <button>Submit</button>
            </form> */}
        </div>
    );
}
