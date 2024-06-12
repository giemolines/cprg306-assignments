import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen p-5 bg-slate-900 text-stone-50">
      <div>
        <h1 className="text-center font-bold text-xl p-2">CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div className="bg-slate-800 rounded-lg p-5">
        <Link className="hover:text-stone-400 hover:underline"href="./week-2">Week 2</Link>
        <br></br>
        <Link className="hover:text-stone-400 hover:underline" href="./week-3">Week 3</Link>
        <br></br>
        <Link className="hover:text-stone-400 hover:underline" href="./week-4">Week 4</Link>
        <br></br>
        <Link className="hover:text-stone-400 hover:underline" href="./week-5">Week 5</Link>
        <br></br>
        <Link className="hover:text-stone-400 hover:underline" href="./week-6">Week 6</Link>
        <br></br>
        <Link className="hover:text-stone-400 hover:underline" href="./week-7">Week 7</Link>
        <br></br>
      </div>
      
    </main>
  );
}