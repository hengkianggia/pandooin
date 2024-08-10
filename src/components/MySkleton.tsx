import React from "react";
import { Skeleton } from "./ui/skeleton";
import Div from "./Div";

const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Skleton = ({ maks = 4 }: { maks?: number }) => {
  return (
    <Div flex between className="gap-3 w-full">
      {loop.map((item, idx) => (
        <>
          {idx + 1 <= maks && (
            <div className="flex flex-col space-y-3 w-full">
              <Skeleton className="w-full aspect-square" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[70%]" />
              </div>
            </div>
          )}
        </>
      ))}
    </Div>
  );
};
