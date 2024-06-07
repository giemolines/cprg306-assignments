import Link from "next/link";
import ItemList from "./item-list";
import items from "./items"


export default function Page(){

    return(
        <main className="h-fill bg-slate-900 p-5">
            <Link className="text-stone-50 hover:text-stone-500 hover:underline active:text-orange-400" href="../">{"<"} Back</Link>
            <div>
                <h1 className="text-4xl text-stone-50 font-bold text-center pb-5">Shopping List</h1>
            </div>
            <div>
                <ItemList></ItemList>
            </div>
        </main>
    );
};