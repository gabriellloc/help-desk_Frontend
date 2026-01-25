import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("leading-[140%]", {
  variants: {
    variant: {
      "text-xl": "text-2xl font-bold",
      "text-lg": "text-xl font-bold",
      "text-md-bold": "text-[16px] font-bold",
      "text-md-normal": "text-[16px] font-normal",
      "text-sm-bold": "text-[14px] font-bold",
      "text-sm-normal": "text-[14px] font-bold-normal",
      "text-xs-bold": "text-[12px] font-bold",
      "text-xs-normal": "text-[12px] font-normal",
      "text-xxs": "text-[10px] font-bold uppercase",
    },
		color: {
			"gray-100": "text-gray-100",
			"gray-200": "text-gray-200",
			"gray-300": "text-gray-300",
			"gray-400": "text-gray-400",
			"gray-500": "text-gray-500",
			"gray-600": "text-gray-600",
			"feedBack-danger": "text-feedback-danger",
			"blue-dark": "text-blue-dark",
			"blue-light": "text-blue-light",
		}
  },
  defaultVariants: {
    variant: "text-sm-normal",
		color: "gray-100"
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  classname?: string;
};

function Text({ as: Component = "span", variant, color, children, classname }: TextProps) {
  return <Component className={`${textVariants({variant, color})} ${classname}`}>{children}</Component>;
}

export { Text };
