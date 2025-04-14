import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface INavbarActionWrapperProps {
  children: React.ReactNode;
  tooltipText: string;
  triggerAsChild?: boolean;
}

export default function NavbraActionWrapper({
  children,
  tooltipText,
  triggerAsChild,
}: INavbarActionWrapperProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="hover:cursor-pointer hover:scale-105"
          asChild={triggerAsChild}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="capitalize font-semibold">
          {tooltipText}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
