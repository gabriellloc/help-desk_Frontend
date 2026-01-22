import { useState } from "react";
import { Text } from "./Text";

import XSvg from "../assets/icons/icon/x.svg";
import { Input } from "./Input";
import { Button } from "./Button";

type User = {
	id: number;
	name: string;
	email: string;
};

interface ModalRegister {
	user?: User;
	type: "Cliente" | "Cadastro de serviço" | "Excluir Cliente";
	onClose: () => void;
}

function ModalRegister({ user, type, onClose }: ModalRegister) {
	const [name, setName] = useState(user?.name || "");
	const [email, setEmail] = useState(user?.email || "");

	if (type === "Excluir Cliente") {
		return (
			<div className="p-5 fixed inset-0 backdrop-brightness-40 flex items-center justify-center">
				<div className="md:max-w-110 flex flex-col bg-gray-600 rounded-[10px]">
					<div className="flex justify-between py-5 px-7">
						<Text variant={"text-md-bold"} color={"gray-200"}>
							{type}
						</Text>
						<button className="cursor-pointer flex" onClick={onClose}>
							<img src={XSvg} alt="Botão para Fechar" className="w-4" />
						</button>
					</div>
					<hr className="text-gray-500" />
					<div className="flex flex-col gap-5 py-5 px-7">
						<Text variant={"text-sm-bold"} color={"gray-200"}>
							Deseja realmente excluir {user?.name}?
						</Text>
						<Text variant={"text-md-normal"} color={"gray-200"}>
							Ao excluir, todos os chamados deste cliente serão removidos e esta
							ação não poderá ser desfeita.
						</Text>
					</div>

					<div className="flex gap-2 py-5 px-7">
						<Button variant={"secondary"} classname="flex-1" onClick={onClose}>
							Cancelar
						</Button>
						<Button classname="flex-1">Sim, excluir</Button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="p-5 fixed inset-0 backdrop-brightness-40 flex items-center justify-center">
			<div className="min-w-110 flex flex-col bg-gray-600 rounded-[10px]">
				<div className="flex justify-between py-5 px-7">
					<Text variant={"text-md-bold"} color={"gray-200"}>
						{type}
					</Text>
					<button className="cursor-pointer flex" onClick={onClose}>
						<img src={XSvg} alt="Botão para Fechar" className="w-4" />
					</button>
				</div>
				<hr className="text-gray-500" />
				<form action="" className="py-5 px-7 flex flex-col gap-4">
					<Input
						htmlFor="name"
						name="name"
						children={type == "Cliente" ? "Nome" : "Titulo"}
						type="text"
						label={"labelDefault"}
						input={"inputDefault"}
						SError={"errorDefault"}
						placeholder={
							type == "Cliente" ? "Nome completo" : "Nome do serviço"
						}
						value={type == "Cliente" ? name : ""}
						onChange={(e) => setName(e.target.value)}
						error={``}
					/>
					<Input
						htmlFor="email"
						name="email"
						children={"Email"}
						type={type == "Cliente" ? "email" : "text"}
						label={"labelDefault"}
						input={"inputDefault"}
						SError={"errorDefault"}
						placeholder={type == "Cliente" ? "Email" : "0,00"}
						value={type == "Cliente" ? email : "R$ "}
						onChange={(e) => setEmail(e.target.value)}
						error={``}
					/>
				</form>
				<hr className="text-gray-500" />
				<Button classname="flex-1 mx-6 my-6">Salvar</Button>
			</div>
		</div>
	);
}

export { ModalRegister };
