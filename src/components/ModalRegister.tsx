import { useState } from "react";

import { Text } from "./Text";
import { Button } from "./Button";
import Input from "../components/formsInput";

import XSvg from "../assets/icons/icon/x.svg";

type User = {
  id: number;
  name: string;
  email?: string;
};

type ServicesProps = {
  id: string;
  title: string;
  amount: number;
  status: boolean;
};

interface ModalRegister {
  user?: User;
  services?: ServicesProps;
  type: "Cliente" | "Cadastro de serviço" | "Excluir Cliente";
  onClose: () => void;
}

function ModalRegister({ user, type, services, onClose }: ModalRegister) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const [title, setTitle] = useState(services?.title);
  const [amount, setAmount] = useState(services?.amount);

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
          <Input.InputRoot>
            <Input.InputLabel
              children={type == "Cliente" ? "Nome" : "Titulo"}
              htmlFor="IdName"
            />
            <Input.InputControl
              id="IdName"
              placeholder={
                type == "Cliente" ? "Nome completo" : "Nome do serviço"
              }
              value={
                type == "Cliente" ? name : services != undefined ? title : title
              }
              onChange={(e) => {
                if (type === "Cliente") {
                  setName(e.target.value);
                } else {
                  setTitle(e.target.value);
                }
              }}
            />
          </Input.InputRoot>
          <Input.InputRoot>
            <Input.InputLabel
              children={type == "Cliente" ? "email" : "Valor"}
              htmlFor="IdEmail"
            />
            <Input.InputControl
              id="IdEmail"
              placeholder={type == "Cliente" ? "Email" : "R$ 0,00"}
              type={type == "Cliente" ? "email" : "number"}
              min={0}
              value={
                type == "Cliente"
                  ? email
                  : services != undefined
                    ? amount
                    : amount
              }
              onChange={(e) => {
                setEmail(e.target.value);
                setAmount(Number(e.target.value));
              }}
            />
          </Input.InputRoot>
        </form>
        <hr className="text-gray-500" />
        <Button classname="flex-1 mx-6 my-6">Salvar</Button>
      </div>
    </div>
  );
}

export { ModalRegister };
