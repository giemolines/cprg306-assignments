"use client"
import { useState} from "react"
import Item from "@/app/week-3/item";

export function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newItem = {name:name, quantity:quantity, category:category}
        alert(`Added item: ${newItem.name}, Quantity: ${newItem.quantity}, Category: ${newItem.category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
        return newItem; 
    };

    function onNameChange(event){
        setName(event.target.value);
    }

    function onQuantityChange(event){
        setQuantity(event.target.value);
    }

    function onCategoryChange(event){
        setCategory(event.target.value);
    }

    return(
        <main className="flex justify-center items-center">
            <div className="flex-1 bg-stone-50 rounded-xl p-5 max-w-screen-sm">
                <form className="flex-col text-slate-900" onSubmit={handleSubmit}>
                    <div className="flex-1 p-2">
                        <input className="w-full p-2 rounded-md focus: outline-none focus:ring-2 focus:ring-slate-900 bg-stone-100" required placeholder="Item name" type="text" value ={name} onChange={onNameChange}></input>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex-1 p-2">
                            <input className="w-full p-2 rounded-md focus: outline-none focus:ring-2 focus:ring-slate-900 bg-stone-100" min={1} max={99} type="number" value={quantity} onChange={onQuantityChange}></input>
                        </div>

                        <div className="flex-1 p-2">
                            <label>
                                <select className="w-full p-2 rounded-md focus: outline-none focus:ring-2 focus:ring-slate-900 bg-stone-100" value={category} onChange={onCategoryChange}>
                                    <option value="Produce">Produce</option>
                                    <option value="Dairy">Dairy</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Frozen Foods">Frozen Foods</option>
                                    <option value="Canned Goods">Canned Goods</option>
                                    <option value="Dry Goods">Dry Goods</option>
                                    <option value="Beverages">Beverages</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Household">Household</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="flex-1 p-2">
                        <button type='submit' className="h-10 bg-sky-500 text-stone-50 font-bold rounded-md hover:bg-sky-300 active:bg-orange-400 w-full">+</button>
                    </div>
                </form>
            </div>
            
        </main>
    );
}

export default NewItem;