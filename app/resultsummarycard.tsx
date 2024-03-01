import React from "react";
import ResultBlock from "./resultblock";
import SummaryBlock from "./summaryblock";

export default function ResultSummaryCard() {
  const score = 76;
  const grade = "Great";
  const percentage = 65;
  const reaction = 80;
  const memory = 92;
  const verbal = 61;
  const visual = 73;

  return (
    <div
      className="flex w-[375px] flex-col bg-white
      md:w-[736px] md:flex-row md:rounded-[32px] md:text-[18px]"
    >
      <ResultBlock
        score={score}
        grade={grade}
        percentage={percentage}
        className="md:w-[368px]"
      />
      <SummaryBlock
        className="mt-[24px] md:mt-0"
        reaction={reaction}
        memory={memory}
        verbal={verbal}
        visual={visual}
      />
    </div>
  );
}
