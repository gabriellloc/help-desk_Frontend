import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputControlVariants = cva(
  "border-b border-gray-500 text-[16px] font-normal py-2 transition placeholder:text-gray-400 focus:border-b focus:border-b-blue-base focus:outline-0",
);

interface InputControlProps
  extends ComponentProps<"input">, VariantProps<typeof inputControlVariants> {}

export function InputControl(props: InputControlProps) {
  return (
    <input type="text" {...props} className={`${inputControlVariants()}`} />
  );
}
