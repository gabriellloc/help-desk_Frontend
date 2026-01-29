// Imports
import { useActionState } from "react";

// Components
import { Button } from "../components/Button";
import Input from "../components/formsInput";
import { Text } from "../components/Text";

function SignUp() {
  const [_, formAction, isPending] = useActionState(onSubmit, null);

  function onSubmit(_: unknown, data: FormData) {
    console.log(Object.fromEntries(data).name);
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
          Crie sua conta
        </Text>
        <Text variant={"text-xs-normal"} color={"gray-300"}>
          Informe seu nome, e-mail e senha
        </Text>
      </div>

      <form
        action={formAction}
        className="flex flex-col gap-4"
        id="formRegister"
      >
        <Input.InputRoot>
          <Input.InputLabel children="Nome" htmlFor="IdName" />
          <Input.InputControl
            name="name"
            id="IdName"
            placeholder="Digite seu nome completo"
            required
          />
        </Input.InputRoot>

        <Input.InputRoot>
          <Input.InputLabel children="E-mail" htmlFor="IdEmail" />
          <Input.InputControl
            name="email"
            id="IdEmail"
            type="email"
            placeholder="exemplo@mail.com"
            required
          />
        </Input.InputRoot>

        <Input.InputRoot>
          <Input.InputLabel children="Senha" htmlFor="IdPassword" />
          <Input.InputControl
            name="password"
            id="IdPassword"
            type="password"
            placeholder="Digite sua senha"
            required
          />
        </Input.InputRoot>
      </form>
      <Button type="submit" form="formRegister" disabled={isPending}>
        Criar conta
      </Button>
    </div>
  );
}

export { SignUp };
