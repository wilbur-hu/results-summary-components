import React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = { className?: string; children?: React.ReactNode };

export default function Button(props: ButtonProps) {
  return (
    <div
      className={cn(
        " rounded-[128px] bg-dark-grey-blue p-[16px] text-center text-[18px] font-bold text-white",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
