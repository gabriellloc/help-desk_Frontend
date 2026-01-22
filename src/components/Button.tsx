import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const ButtonVariants = cva("flex justify-center items-center", {
  variants: {
    variant: {
      primary:
        "h-10 p-4 flex gap-2 bg-gray-200 text-gray-600 text-[14px] font-bold rounded-[5px] cursor-pointer transition hover:bg-gray-100 hover:opacity-80",
      secondary:
        "h-10 p-4 flex gap-2 bg-gray-500 text-gray-200 text-[14px] font-bold rounded-[5px] cursor-pointer transition hover:bg-gray-400 hover:text-gray-100 disabled:opacity-80",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof ButtonVariants> {
  children: React.ReactNode;
  classname?: string;
}

function Button({ children, classname, variant, ...rest }: ButtonProps) {
  return (
    <button className={`${ButtonVariants({ variant })} ${classname}`} {...rest}>
      {children}
    </button>
  );
}

export { Button };
