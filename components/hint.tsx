import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { PropsWithChildren } from "react";

interface HintProps extends PropsWithChildren {
   description: string;
   side?: "left" | "right" | "top" | "bottom";
   sideOffset?: number;
}

export const Hint = ({ description, side = "bottom", sideOffset = 0, children }: HintProps) => {
   return (
      <TooltipProvider>
         <Tooltip delayDuration={0}>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent
               side={side}
               sideOffset={sideOffset}
               className="text-xs max-w-[220px] break-words"
            >
               {description}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};
