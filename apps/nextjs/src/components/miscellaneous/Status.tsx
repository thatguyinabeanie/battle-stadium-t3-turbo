import type { HTMLAttributes } from "react";
import { forwardRef, memo } from "react";
import { cn } from "@nextui-org/react";

import { statusColorMap  } from "~/components/nextui/data";
import type {StatusOptions} from "~/components/nextui/data";

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  status: StatusOptions;
}

export const Status = memo(
  forwardRef<HTMLDivElement, StatusProps>((props, forwardedRef) => {
    const { className, status } = props;
    const statusColor = statusColorMap[status];

    return (
      <div
        ref={forwardedRef}
        className={cn("flex w-fit items-center gap-[2px] rounded-lg bg-default-100 px-2 py-1", className)}
      >
        {statusColor}
        <span className="px-1 text-default-800">{status}</span>
      </div>
    );
  }),
);

Status.displayName = "Status";
