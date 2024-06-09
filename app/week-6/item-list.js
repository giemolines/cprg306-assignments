"use client"
import { useState } from 'react';
import Item from './item';


export default function ItemList({items}){
    const [sortBy, setSortBy] = useState("name");
    const [grouped, setGrouped] = useState(false);

    const modifiedItems = [...items];
    
    function sortItems (){
        if (sortBy == "name"){
            modifiedItems.sort((a, b) =>  a.name.localeCompare(b.name));
        }
        else if (sortBy == "category"){
            modifiedItems.sort((a, b) =>  a.category.localeCompare(b.category));
        }

        return modifiedItems;
    }

    const sortByName = () => {
        setSortBy("name");
        setGrouped(false);
        console.log(sortBy);
    }

    const sortByCategory = () => {
        setSortBy("category");
        setGrouped(false);
        console.log(sortBy);
    }

    const groupByCategory = () => {
        setSortBy("category");
        setGrouped(true);
        console.log(grouped);
    }

    const displayItems = (items) =>{
        const sortedItems = sortItems(modifiedItems)
        const categories =[];

        if (!grouped){
            return sortedItems.map((item) => 
                <li key = {item.id}>
                     <Item name={item.name} quantity={item.quantity} category={item.category}/>
                </li>);
        }

        else{
            sortedItems.forEach(item => {
                if (!categories.includes(item.category)){
                    categories.push(item.category)
                }
            });

            return categories.map((category) => (
                <div key ={category}>
                    <div className='text-stone-50 text-2xl capitalize font-semibold'>
                        <h2>{category}</h2>
                    </div>
                    <ul>
                    {sortedItems.filter((item) => item.category === category)
                        .map((item) => (
                            <li key={item.id}>
                                <Item name={item.name} quantity={item.quantity} category={item.category}/>
                            </li>
                        ))}
                    </ul>
                </div>
            ))


        }
    }

    // GROUP BY CATEGORY

    

    



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
                        <button className="flex-1 text-xl text-stone-50  bg-orange-400 rounded-xl p-3 hover:bg-orange-800 active:bg-yellow-400" onClick={groupByCategory}>
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
