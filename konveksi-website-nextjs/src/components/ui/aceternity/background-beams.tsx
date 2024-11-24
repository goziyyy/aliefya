// components/ui/aceternity/background-beams.tsx
"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  ];

  return (
    <div className={cn("h-full w-full", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-150 opacity-50"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#80CBC4", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#26A69A", stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <g>
          {paths.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke="url(#beam-gradient)"
              strokeWidth="1"
              fill="none"
              className="animate-beam"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

