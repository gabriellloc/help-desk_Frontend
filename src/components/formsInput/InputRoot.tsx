import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputRootVariants = cva("flex flex-col focus-within:[&>label]:text-blue-base", {
  variants: {},
  defaultVariants: {},
});

interface inputRootProps
  extends ComponentProps<"div">, VariantProps<typeof inputRootVariants> {}

export function InputRoot(props: inputRootProps) {
  return <div {...props} className={`${inputRootVariants()}`} />;
}
