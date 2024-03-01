import Image from "next/image";
import ResultSummaryCard from "./resultsummarycard";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-pale-blue min-h-full">
      <ResultSummaryCard />
    </main>
  );
}
