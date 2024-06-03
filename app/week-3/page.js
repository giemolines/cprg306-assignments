import Item from "./item";
import ItemList from "./item-list";
import Link from "next/link";

export default function Page(){
    return(
        <main className="bg-slate-900 p-5 h-full">
            <div>
                <Link className="text-stone-50 hover:text-stone-500 hover:underline active:text-orange-400" href="../">{"<"} Back</Link>
            </div>
            <div>
                <h1 className="text-stone-50 font-semibold text-4xl p-5">Shopping List</h1>
            </div>

           <div>
                <ItemList></ItemList>
           </div>
        </main>
    );
}