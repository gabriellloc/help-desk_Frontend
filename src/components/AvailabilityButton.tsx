import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import XSvg from "../assets/icons/icon/x.svg";

export const AvailabilityButtonVariants = cva(
  "border border-gray-400 rounded-full px-3 py-1.5 w-fit h-fit cursor-pointer hover:opacity-80 flex gap-1.5 text-[12px] font-bold transition",
  {
    variants: {
      variants: {
        default:
          "bg-transparent text-gray-200 hover:bg-gray-500 hover:text-gray-100",
        active: "bg-blue-base text-gray-600",
      },
    },
    defaultVariants: { variants: "default" },
  },
);

interface AvailabilityButtonProps
  extends
    VariantProps<typeof AvailabilityButtonVariants>,
    React.ComponentProps<"button"> {
  children: React.ReactNode;
}

function AvailabilityButton({
  children,
  variants,
  ...rest
}: AvailabilityButtonProps) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <button
      className={`${AvailabilityButtonVariants({ variants: active ? "active" : "default" })}`}
      {...rest}
      onClick={handleClick}
    >
      {children}
      <img src={XSvg} hidden={!active} className="w-3.5" />
    </button>
  );
}

export { AvailabilityButton };
