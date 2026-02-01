import { type ComponentProps, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const ButtonVariants = cva(
  "flex justify-center items-center h-10 p-4 gap-2 rounded-[5px] cursor-pointer transition font-bold",
  {
    variants: {
      variant: {
        primary:
          "bg-gray-200 text-gray-600 text-[14px] hover:bg-gray-100 hover:opacity-80",
        secondary:
          "bg-gray-500 text-gray-200 text-[14px] hover:bg-gray-400 hover:text-gray-100 disabled:opacity-80",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof ButtonVariants> {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className, variant, ...rest }: ButtonProps) {
  return (
    <button className={ButtonVariants({ variant, className })} {...rest}>
      {children}
    </button>
  );
}
