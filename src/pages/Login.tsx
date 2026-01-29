// Imports
import { useActionState } from "react";
import { useNavigate } from "react-router";

// Components
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import Input from "../components/formsInput";

import { user } from "../routes";

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
        <Input.InputRoot>
          <Input.InputLabel children="E-mail" htmlFor="IdEmail" />
          <Input.InputControl
            id="IdEmail"
            type="email"
            name="email"
            placeholder="exemplo@email.com"
            autoFocus
            required
          />
        </Input.InputRoot>
        <Input.InputRoot>
          <Input.InputLabel children="Senha" htmlFor="IdPassword" />
          <Input.InputControl
            id="IdPassword"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            required
          />
        </Input.InputRoot>
      </form>

      <Button
        type="submit"
        form="FormLogin"
        disabled={isPending}
        onClick={() => {
          navigate(`/${user.role}`);
        }}
      >
        Entrar
      </Button>
    </div>
  );
}

export { Login };
