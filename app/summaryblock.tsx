import React from "react";
import Image from "next/image";
import iconReaction from "@/public/images/icon-reaction.svg";
import iconMemory from "@/public/images/icon-memory.svg";
import iconVisual from "@/public/images/icon-visual.svg";
import iconVerbal from "@/public/images/icon-verbal.svg";
import { cn } from "@/lib/utils";

export type SummaryCardProps = {
  reaction: number;
  memory: number;
  visual: number;
  verbal: number;
  className?: string;
};

export default function SummaryBlock(props: SummaryCardProps) {
  return (
    <section className={cn("px-[30px]", props.className)}>
      <h3 className="pl-[1px] text-[18px] font-bold leading-[23px] text-dark-grey-blue">
        Summary
      </h3>
      <SummaryItem
        title="Reaction"
        score={props.reaction}
        icon={iconReaction}
        backgroundColorClass="bg-red bg-gradient-to-t from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]"
        textColorClass="text-red"
        className="mt-[24px]"
      />
      <SummaryItem
        title="Memory"
        score={props.memory}
        icon={iconMemory}
        backgroundColorClass="bg-orangey-yellow bg-gradient-to-t from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]"
        textColorClass="text-orangey-yellow"
        className="mt-[16px]"
      />

      <SummaryItem
        title="Verbal"
        score={props.verbal}
        icon={iconVerbal}
        backgroundColorClass="bg-green-teal bg-gradient-to-t from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]"
        textColorClass="text-green-teal"
        className="mt-[16px]"
      />

      <SummaryItem
        title="Visual"
        score={props.visual}
        icon={iconVisual}
        backgroundColorClass="bg-cobalt-blue bg-gradient-to-t from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]"
        textColorClass="text-cobalt-blue"
        className="mt-[16px]"
      />
    </section>
  );
}

type SummaryItemProps = {
  score: number;
  title: string;
  icon: string;
  backgroundColorClass: string;
  textColorClass: string;
  className?: string;
};

function SummaryItem(props: SummaryItemProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-[12px] p-[16px]",
        props.className,
        props.backgroundColorClass,
        props.textColorClass,
      )}
    >
      <Image src={props.icon} alt={props.title} />
      <span className="ml-[12px]">{props.title}</span>

      <span className=" ml-auto font-bold text-dark-grey-blue">
        <span>{props.score}</span>
        <span className=" opacity-50"> / 100</span>
      </span>
    </div>
  );
}
