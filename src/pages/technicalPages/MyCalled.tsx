import { useNavigate } from "react-router"

import { Text } from "../../components/Text"
import { Status } from "../../components/Status"
import { CalledCard } from "../../components/CalledCard"

type CalledProps = {
	id: string;
	title: string;
	description: string;
	date: string;
	amount: number;
	costumer: string;
	state: "pending" | "open" | "closed";
}

const AllCalled: CalledProps[] = [
	{
		id: "0001",
		title: "Rede lenta",
		description: "Instalação de internet",
		amount: 120,
		costumer: "André Costa",
		date: "10/04/25 15:13",
		state: "pending"
	},
	{
		id: "9999",
		title: "Rede Sem funcionar",
		description: "Falha de internet",
		amount: 120,
		costumer: "Maria Lina",
		date: "12/04/25 14:13",
		state: "pending"
	},
	{
		id: "8888",
		title: "Rede lenta",
		description: "Instalação de internet",
		amount: 120,
		costumer: "Mariana Maria",
		date: "10/04/25 15:13",
		state: "open"
	},
	{
		id: "7777",
		title: "Rede Sem funcionar",
		description: "Falha de internet",
		amount: 120,
		costumer: "Felicia Santos",
		date: "12/04/25 14:13",
		state: "open"
	},
	{
		id: "6667",
		title: "Rede lenta",
		description: "Instalação de internet",
		amount: 120,
		costumer: "Julia Maria",
		date: "10/04/25 15:13",
		state: "closed"
	},
	{
		id: "5555",
		title: "Rede Sem funcionar",
		description: "Falha de internet",
		amount: 120,
		costumer: "Maria Maria",
		date: "12/04/25 14:13",
		state: "closed"
	},
	{
		id: "4444",
		title: "Rede lenta",
		description: "Instalação de internet",
		amount: 120,
		costumer: "Julia Maria",
		date: "10/04/25 15:13",
		state: "closed"
	},
	{
		id: "3333",
		title: "Rede Sem funcionar",
		description: "Falha de internet",
		amount: 120,
		costumer: "Maria Maria",
		date: "12/04/25 14:13",
		state: "closed"
	},
	{
		id: "2222",
		title: "Rede lenta",
		description: "Instalação de internet",
		amount: 120,
		costumer: "Julia Maria",
		date: "10/04/25 15:13",
		state: "closed"
	},
	{
		id: "1111",
		title: "Rede Sem funcionar",
		description: "Falha de internet",
		amount: 120,
		costumer: "Maria Maria",
		date: "12/04/25 14:13",
		state: "closed"
	},
]

function MyTechnicalCalled() {
	const navigate = useNavigate()
	return (
		<div className="bg-gray-600 w-full overflow-auto h-full mt-3 rounded-tl-[20px] py-13 px-12 flex flex-col gap-6">
			<div>
				<Text variant={"text-xl"} color={"blue-dark"}>
					Chamados
				</Text>
			</div>

			<section className="flex flex-col gap-4">
				<div>
					<Status children="Em atendimento" icon="pendingSvg" variant={"pending"} />
				</div>
				<div className="flex gap-2 flex-wrap">
					{AllCalled.filter(called => called.state === "pending").map(called => (
						<CalledCard
							key={called.id}
							id={called.id}
							state={called.state}
							title={called.title}
							description={called.description}
							amount={called.amount}
							costumer={called.costumer}
							date={called.date}
							status={{ icon: "pendingSvg", variant: "pending" }}
							editCard={() => navigate(`${called.id}/edit`)}
							endingCard={() => { return }}
						/>
					))}

				</div>
			</section>

			<section className="flex flex-col gap-4">
				<div>
					<Status children="Em aberto" icon="openSvg" variant={"open"} />
				</div>
				<div className="flex gap-2 flex-wrap">
					{AllCalled.filter(called => called.state === "open").map(called => (
						<CalledCard
							key={called.id}
							id={called.id}
							state={called.state}
							title={called.title}
							description={called.description}
							amount={called.amount}
							costumer={called.costumer}
							date={called.date}
							status={{ icon: "openSvg", variant: "open" }}
							editCard={() => navigate(`${called.id}/edit`)}
							endingCard={() => { return }}
						/>
					))}
				</div>
			</section>

			<section className="flex flex-col gap-4">
				<div>
					<Status children="Encerrado" icon="closedSvg" variant={"closed"} />
				</div>
				<div className="flex gap-2 flex-wrap">
					{AllCalled.filter(called => called.state === "closed").map(called => (
						<CalledCard
							key={called.id}
							id={called.id}
							state={called.state}
							title={called.title}
							description={called.description}
							amount={called.amount}
							costumer={called.costumer}
							date={called.date}
							status={{ icon: "closedSvg", variant: "closed" }}
							editCard={() => navigate(`${called.id}/edit`)}
							endingCard={() => { return }}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export { MyTechnicalCalled }