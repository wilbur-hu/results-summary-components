import React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = { className?: string; children?: React.ReactNode };

export default function Button(props: ButtonProps) {
  return (
    <div
      className={cn(
        "rounded-[128px] bg-dark-grey-blue p-[16px] text-center text-[18px] font-bold text-white " +
          "hover:bg-gradient-to-b hover:from-[#7755FF_0%] hover:via-[#6943FF_0.01%] hover:to-[#2F2CE9_100%]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
