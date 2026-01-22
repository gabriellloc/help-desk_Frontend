import { Text } from "../../components/Text"
import { Button } from "../../components/Button"

import PlusSvg from "../../assets/icons/icon/plus.svg"
import { Status } from "../../components/Status"

type ServicesProps = {
	id: string
	title: string
	amount: number
	status: boolean
}

const Services: ServicesProps[] = [
	{ id: "1", title: "Instalação de Rede", amount: 180, status: true },
	{ id: "2", title: "Recuperação de Dados", amount: 200, status: false },
	{ id: "3", title: "Manutenção de Hardware", amount: 150, status: false },
]

function AllServices() {
	return <div className="bg-gray-600 w-full overflow-auto h-full mt-3 rounded-tl-[20px] py-13 px-12 flex flex-col gap-6">
		<div className="flex justify-between ">
			<Text variant={"text-xl"} color={"blue-dark"}>
				Serviços
			</Text>

			<Button onClick={() => { }}>
				<img src={PlusSvg} className="w-4.5" />
				<span className="hidden md:inline">Novo</span>
			</Button>
		</div>


		<div className="w-full border border-gray-500 rounded-[10px] overflow-auto">
			<table className="w-full">
				<thead className="border-b border-gray-500">
					<tr className="text-left">
						<td className="p-3">
							<Text variant={"text-sm-bold"} color={"gray-400"}>
								Título
							</Text>
						</td>
						<td className="p-3 max-lg:hidden">
							<Text variant={"text-sm-bold"} color={"gray-400"}>
								Valor
							</Text>
						</td>
						<td className="p-3">
							<Text variant={"text-sm-bold"} color={"gray-400"}>
								Status
							</Text>
						</td>
					</tr>
				</thead>
				<tbody>
					{Services.map(service => (
						<tr className="border-b border-gray-500" key={service.id}>
							<td className="p-3">
								<Text>{service.title}</Text>
							</td>
							<td className="p-3">
								<Text>R$ {service.amount}</Text>
							</td>
							<td className="p-3">
								<Status icon="openSvg" children={service.status ? "Ativo" : "Inativo"} hiddenIcon variant={service.status ? "closed" : "open"} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
}

export { AllServices }