// Imports
import { useActionState } from "react";
import { useNavigate } from "react-router";

// Components
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";


import { user } from "../routes"

function Login() {
	const navigate = useNavigate();
	const [_, formAction, isPending] = useActionState(onSubmit, null);

	function onSubmit(_: unknown, data: FormData) {
		console.log(Object.fromEntries(data).email);
		console.log(Object.fromEntries(data).password);
		console.log(Object.fromEntries(data));

		const formData = Object.fromEntries(data);
		return formData;
	}

	return (
		<div className="w-full h-full p-7 flex flex-col gap-10">
			<div className="flex flex-col gap-0.5">
				<Text variant={"text-lg"} color={"gray-200"}>
					Acesse o portal
				</Text>
				<Text variant={"text-xs-normal"} color={"gray-300"}>
					Entre usando seu e-mail e senha cadastrados
				</Text>
			</div>

			<form action={formAction} className="flex flex-col gap-4" id="FormLogin">
				<Input
					name="email"
					children={"E-mail"}
					type="email"
					label={"labelDefault"}
					input={"inputDefault"}
					SError={"errorDefault"}
					placeholder={"exemplo@mail.com"}
					error={""} // Nunca definir error aqui
					htmlFor="email"
				/>
				<Input
					name="password"
					children={"Senha"}
					type="password"
					label={"labelDefault"}
					input={"inputDefault"}
					SError={"errorDefault"}
					placeholder={"Digite sua senha"}
					error={``}
					htmlFor="password"
				/>
			</form>

			<Button type="submit" form="FormLogin" disabled={isPending} onClick={() => {
				navigate(`/${user.role}`);
			}}>
				Entrar
			</Button>
		</div>
	);
}

export { Login };
