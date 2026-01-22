import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const AvailabilityIconVariants = cva("rounded-full w-fit h-fit py-1.5 px-2", {
  variants: {
    variant: {
      default: "border border-gray-500 text-[12px] font-bold text-gray-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface AvailabilityIconProps extends VariantProps<
  typeof AvailabilityIconVariants
> {
  children: React.ReactNode;
}

function AvailabilityIcon({ children, variant }: AvailabilityIconProps) {
  return (
    <div className={`${AvailabilityIconVariants({ variant })}`}>{children}</div>
  );
}

export { AvailabilityIcon };
