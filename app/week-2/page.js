import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
    return (
      <main className="h-screen p-5">
        <Link href="../">{"<"} Back</Link>
        <h1>Shopping List</h1>
        <StudentInfo/>
      </main>
    );
  }