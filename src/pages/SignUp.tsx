// Imports
import { useActionState } from "react";

// Components
import { Button } from "../components/Button";
import { Input } from "../components/Input";
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

      <form action={formAction} id="formRegister">
        <Input
          htmlFor="name"
          name="name"
          children={"Nome"}
          type="text"
          label={"labelDefault"}
          input={"inputDefault"}
          SError={"errorDefault"}
          placeholder={"Digite seu nome completo"}
          error={``}
          required
        />
        <Input
          name="email"
          htmlFor="email"
          children={"e-mail"}
          type="email"
          label={"labelDefault"}
          input={"inputDefault"}
          SError={"errorDefault"}
          placeholder={"exemplo@mail.com"}
          error={``}
          required
        />
        <Input
          name="password"
          htmlFor="senha"
          children={"senha"}
          type="password"
          label={"labelDefault"}
          input={"inputDefault"}
          SError={"errorDefault"}
          placeholder={"Digite seu senha"}
          error={``}
          required
        />
      </form>
      <Button type="submit" form="formRegister" disabled={isPending}>
        Criar conta
      </Button>
    </div>
  );
}

export { SignUp };
