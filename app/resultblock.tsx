import React from "react";

export type ResultCardProps = {
  score: number;
  grade: string;
  percentage: number;
  className?: string;
};

function ScoreCircle(props: { score: number; className?: string }) {
  return (
    <div
      className={`"lex h-[140px] w-[140px] flex-col items-center justify-center rounded-full 
      bg-gradient-to-b from-violet-blue to-transparent text-white
      ${props.className}`}
    >
      <p className="mt-[25px] grow-0 text-center text-[56px] font-extrabold leading-[72px]">
        {props.score}
      </p>
      <p className="grow-0 text-center font-bold  text-light-lavender ">
        of 100
      </p>
    </div>
  );
}

export default function ResultBlock(props: ResultCardProps) {
  return (
    <div
      className={`flex flex-col items-center 
     rounded-b-[32px] bg-gradient-to-b from-light-stlte-blue to-light-royal-blue
    ${props.className}`}
    >
      <p className="mt-[22px] text-[18px] font-bold text-light-lavender">
        Your Result
      </p>
      <ScoreCircle score={props.score} className="mt-[22px]" />
      <h3 className="mt-[22px] pr-[4px] text-[24px] font-bold text-white">
        {props.grade}
      </h3>
      <p className="mx-[57px] mb-[41px] mt-[4px] text-center font-medium leading-[21px] text-light-lavender">
        Your performance exceed {props.percentage}% of the people conducting the
        test here!
      </p>
    </div>
  );
}
