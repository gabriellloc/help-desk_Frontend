import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import alert from "../assets/icons/circle-alert.svg";

export const InputVariants = cva("", {
  variants: {
    label: {
      default: "",
      labelDefault:
        "text-[10px] font-bold uppercase text-gray-300 transition focus:text-blue-base",
    },
    input: {
      default: "",
      inputDefault:
        "border-b border-gray-500 text-[16px] font-normal py-2 transition placeholder:text-gray-400 focus:border-b focus:border-b-blue-base focus:outline-0",
    },
    SError: {
      default: "",
      errorDefault: "text-[12px] font-normal text-feedback-danger my-0.5",
    },
  },
  defaultVariants: {
    input: "default",
    label: "default",
    SError: "default",
  },
});

interface InputProps
  extends VariantProps<typeof InputVariants>, React.ComponentProps<"input"> {
  children?: React.ReactNode;
  placeholder?: string;
  error?: string;
  htmlFor: string;
}

function Input({
  children,
  placeholder,
  error,
  input,
  label,
  SError,
  htmlFor,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className={`${InputVariants({ label })}`} htmlFor={htmlFor}>
        {children}
      </label>
      <input
        className={`${InputVariants({ input })}`}
        placeholder={placeholder}
        id={htmlFor}
				{...rest}
      />
      <span className={`${InputVariants({ SError })} flex gap-2`}>
        {error !== "" ? <img src={alert} /> : ""}
        {error}
      </span>
    </div>
  );
}

export { Input };
