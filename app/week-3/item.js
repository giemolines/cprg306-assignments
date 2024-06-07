import ItemList from "./item-list";

export default function Item({name, quantity, category}){

    return(
        <main className="bg-slate-800 rounded-md p-5 m-5 text-stone-50 w-64 ">
            <ul>
                <li>
                    <p className="text-lg font-semibold">{name}</p>
                    <p>Buy {quantity} in {category}</p>
                </li>
            </ul>
        </main>
    );
}