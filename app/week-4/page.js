import Link from "next/link";
import { NewItem } from "./components/new-item";

export default function Page(){
    return(
        <main className="bg-slate-900 h-screen p-5">
            <div className="pb-5">
                <Link className="text-stone-50 hover:text-stone-500 hover:underline active:text-orange-400" href="../">{"<"} Back</Link>
            </div>
            <div>
                <NewItem></NewItem>  
            </div>
        </main>
    );
}