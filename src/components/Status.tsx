import { cva, type VariantProps } from "class-variance-authority";

import openSvg from "../assets/icons/icon/circle-help.svg";
import closedSvg from "../assets/icons/icon/circle-check-big.svg";
import pendingSvg from "../assets/icons/icon/clock-2.svg";

const Icons = {
  openSvg,
  pendingSvg,
  closedSvg,
};

export const StatusVariants = cva("flex gap-2 p-1.5 pr-2 rounded-[999px]", {
  variants: {
    variant: {
      open: "bg-[rgba(204,61,106,0.2)] w-fit text-feedback-open text-[12px] font-bold",
      closed: "bg-[rgba(80,139,38,0.2)] w-fit text-feedback-done text-[12px] font-bold",
      pending: "bg-[rgba(53,94,197,0.2)] w-fit text-feedback-progress text-[12px] font-bold",
    },
  },
  defaultVariants: {
    variant: "open",
  },
});

interface StatusProps extends VariantProps<typeof StatusVariants> {
  children: "Aberto" | "Em atendimento" | "Encerrado";
  icon: "openSvg" | "pendingSvg" | "closedSvg";
}

function Status({ children, variant, icon = "openSvg" }: StatusProps) {
  return (
    <div className={`${StatusVariants({ variant })}`}>
      <img src={Icons[icon]} className="w-4"/>
      <p className="max-lg:hidden">{children}</p>
    </div>
  );
}

export { Status };
