import { Text } from "./Text"
import { Button } from "./Button"
import { Status } from "./Status"

import penSvg from "../assets/icons/icon/pen-line.svg"

interface CalledProps {
	id: string;
	title: string;
	description: string;
	date: string;
	amount: number;
	costumer: string;
	state: "pending" | "open" | "closed";
	status: {
		icon: "openSvg" | "pendingSvg" | "closedSvg" | "DoneSvg" | "BanSvg";
		variant: "open" | "closed" | "pending";
	};
	editCard: () => void;
	endingCard: () => void;
}

function CalledCard({ id, title, state, description, date, amount, costumer, status, editCard, endingCard }: CalledProps) {
	return (
		<div /** Card */ className="flex max-md:w-full flex-col gap-4 md:min-w-80 border border-gray-500 rounded-[10px] p-5 relative">
			<div /** Buttons */ className="absolute top-3 right-1.5 flex gap-4 scale-80">
				<button className="p-2 bg-gray-500 flex justify-center items-center rounded-[5px] cursor-pointer transition hover:opacity-60" onClick={editCard}>
					<img src={penSvg} alt="Personalizar chamado" className="w-4 h-4" />
				</button>
				<Button onClick={endingCard} hidden={state === "closed"}>{state === "pending" ? "Encerrar" : "Iniciar"}</Button>
			</div>
			<div /** Header */ className="flex flex-col gap-1">
				<Text variant={"text-xs-bold"} color={"gray-400"}>{id}</Text>
				<div className="flex flex-col">
					<Text variant={"text-md-bold"} color={"gray-100"}>{title}</Text>
					<Text variant={"text-sm-normal"} color={"gray-200"}>{description}</Text>
				</div>
			</div>

			<div /** More */ className="flex justify-between">
				<Text variant={"text-xs-normal"} color={"gray-200"}>{date}</Text>
				<Text variant={"text-sm-normal"} color={"gray-200"}>R$ {amount}</Text>
			</div>

			<hr />

			<div className="flex justify-between items-center">
				<Text variant={"text-xs-bold"} color={"gray-200"}>{costumer}</Text>
				<Status icon={status.icon} variant={status.variant} hiddenText />
			</div>
		</div>
	)
}

export { CalledCard }