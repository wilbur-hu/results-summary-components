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
      className={`"flex size-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b 
      from-violet-blue to-transparent text-white md:size-[200px]
      ${props.className}`}
    >
      <h2 className="mt-[25px] grow-0 text-center text-[56px] font-extrabold leading-[72px] md:mt-[55px] md:pl-[5px] md:text-[72px]">
        {props.score}
      </h2>
      <p className="grow-0 text-center font-bold  text-light-lavender opacity-[51.68%] ">
        of 100
      </p>
    </div>
  );
}

export default function ResultBlock(props: ResultCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-start
     rounded-b-[32px] bg-gradient-to-b from-light-stlte-blue to-light-royal-blue md:rounded-[32px] md:pr-[6px]
    ${props.className}`}
    >
      <p className="mt-[22px] text-[18px] font-bold text-light-lavender md:mt-[38px] md:text-[24px] md:leading-[31px]">
        Your Result
      </p>
      <ScoreCircle score={props.score} className="mt-[22px] md:mt-[35px]" />
      <h3 className="mt-[22px] pr-[4px] text-[24px] font-bold text-white md:mt-[28px] md:pl-[4px] md:text-[32px] md:leading-[42px]">
        {props.grade}
      </h3>
      <p className="mx-[57px] mb-[41px] mt-[4px] text-center font-medium leading-[21px] text-light-lavender md:mb-[55px] md:mt-[14px] md:leading-[23px]">
        Your performance exceed {props.percentage}% of the people conducting the
        test here!
      </p>
    </div>
  );
}
