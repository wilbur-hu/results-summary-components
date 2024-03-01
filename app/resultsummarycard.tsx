import React from "react";
import ResultBlock from "./resultblock";
import SummaryBlock from "./summaryblock";
import Button from "./button";

export default function ResultSummaryCard() {
  const score = 76;
  const grade = "Great";
  const percentage = 65;
  const reaction = 80;
  const memory = 92;
  const verbal = 61;
  const visual = 73;

  return (
    <div className="flex w-[375px] flex-col  bg-white">
      <ResultBlock score={score} grade={grade} percentage={percentage} />
      <SummaryBlock
        className="mt-[24px]"
        reaction={reaction}
        memory={memory}
        verbal={verbal}
        visual={visual}
      />
      <Button className="mx-[30px] mb-[30px] mt-[24px]">Continue</Button>
    </div>
  );
}
