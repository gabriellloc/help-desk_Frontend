import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputLabelVariants = cva(
  "text-10px font-bold uppercase transition text-gray-300",
  {
    variants: {},
    defaultVariants: {},
  },
);

interface InputLabelProps
  extends ComponentProps<"label">, VariantProps<typeof inputLabelVariants> {
  children: ReactNode;
}

export function InputLabel({ children, ...props }: InputLabelProps) {
  return (
    <label {...props} className={`${inputLabelVariants()}`}>
      {children}
    </label>
  );
}
