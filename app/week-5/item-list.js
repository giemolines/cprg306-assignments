"use client"
import items from './items';
import { useState } from 'react';
import Item from './item';


export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");
    
    function sortItems (items){
        if (sortBy == "name"){
            items.sort((a, b) =>  a.name.localeCompare(b.name));
        }
        else if (sortBy == "category"){
            items.sort((a, b) =>  a.category.localeCompare(b.category));
        }

        return items;
    }

    const sortByName = () => {
        setSortBy("name");
        console.log(sortBy);
    }

    const sortByCategory = () => {
        setSortBy("category");
        console.log(sortBy);
    }

    const displayItems = (items) =>{
        const sortedItems = sortItems(items)
        return sortedItems.map((item) => 
            <li key = {item.id}>
                 <Item name={item.name} quantity={item.quantity} category={item.category}/>
            </li>);
    }

    

    return(
        <main>
            <div className="p-5 rounded-xl">
                
                <div className='flex flex-row justify-evenly bg-slate-800 p-5 rounded-xl items-center'>
                    <div>
                        <h1 className="flex-1 text-xl text-stone-50 text-center"> Sort Items By:</h1>
                    </div> 
                    <div>
                        <button className="flex-1 text-xl text-stone-50 bg-orange-400 rounded-xl p-3 hover:bg-orange-800 active:bg-yellow-400" onClick={sortByName}>
                            Name
                        </button>
                    </div>
                    <div>
                        <button className="flex-1 text-xl text-stone-50 bg-orange-400 rounded-xl p-3 hover:bg-orange-800 active:bg-yellow-400" onClick={sortByCategory}>
                            Category
                        </button>
                    </div>
                    <div>
                        <button className="flex-1 text-xl text-stone-50  bg-orange-400 rounded-xl p-3 hover:bg-orange-800 active:bg-yellow-400">
                            Group By Category
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    {displayItems(items)}
                </ul>
            </div>
            
    </main>

    );
    
};
