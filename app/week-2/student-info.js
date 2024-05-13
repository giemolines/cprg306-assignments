import Link from "next/link";

export default function StudentInfo(){

    return(
        <main>
            <h1>Camilla Molines</h1>
            <Link href="https://github.com/giemolines/cprg306-assignments" className="underline text-orange-500 hover:text-orange-900">View my Github Repository</Link>
        </main>
    );
}