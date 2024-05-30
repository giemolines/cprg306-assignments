import Item from "./item";
import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-slate-900">
            <div>
                <h1 className="text-stone-50 font-semibold text-4xl p-5">Shopping List</h1>
            </div>

           <div>
                <ItemList></ItemList>
           </div>
        </main>
    );
}