"use client"
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import { useState } from "react";


export default function Page(){

    const [items,setItems] = useState(itemsData);

    const handleAddItem = (newItem) =>{
        setItems([...itemsData, newItem] )
    }

    return(
        <main className="h-fill bg-slate-900 p-5">
            <Link className="text-stone-50 hover:text-stone-500 hover:underline active:text-orange-400" href="../">{"<"} Back</Link>
            <div>
                <h1 className="text-4xl text-stone-50 font-bold text-center pb-5">Shopping List</h1>
            </div>
            <div>
                <NewItem onAddItem={handleAddItem}></NewItem>
                <ItemList items={items}></ItemList> 
            </div>
        </main>
    );
};