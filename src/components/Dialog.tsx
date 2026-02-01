import * as Modal from "@radix-ui/react-dialog";

import XSvg from "../assets/icons/icon/x.svg";
import { Text } from "./Text";
import FormsInput from "./formsInput";
import { Button } from "./Button";
import { useState } from "react";

interface DialogProps {
  title: string;
  description?: string;
  firstLabel?: string;
  firstValue?: string;
  firstPlaceholder?: string;
  secondValue?: string;
  secondLabel?: string;
  secondPlaceholder?: string;
  type?: "default" | "deleteUser";
}

export function Dialog({
  title,
  description,
  firstLabel,
  firstValue,
  firstPlaceholder,
  secondLabel,
  secondValue,
  secondPlaceholder,
  type = "default",
}: DialogProps) {
  const [fValue, setFValue] = useState(firstValue);
  const [sValue, setSValue] = useState(secondValue);

  if (type === "deleteUser") {
    return (
      <Modal.Portal>
        <Modal.DialogOverlay className="fixed inset-0 bg-gray-200/50" />

        <Modal.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-600 min-w-110">
          <Modal.Title className="py-5 px-7">
            <Text variant={"text-md-bold"}>{title}</Text>
          </Modal.Title>

          <div className="border-b border-gray-500 rounded-full" />

          <Modal.Description className="py-5 px-7">
            <Text variant={"text-md-bold"}>{description}</Text>
          </Modal.Description>

          <div className="pb-5 px-7">
            <Text variant={"text-md-normal"} as="p">
              Ao excluir, todos os chamados deste cliente serão removidos e esta
              ação não poderá ser desfeita.
            </Text>
          </div>

          <div className="px-7 pb-5 flex gap-2 flex-wrap">
            <Button variant={"secondary"} className="flex-1">
              Cancelar
            </Button>
            <Button className="flex-1">Sim, excluir</Button>
          </div>

          <Modal.DialogClose className="cursor-pointer absolute right-2.5 top-3 inline-flex items-center justify-center">
            <img src={XSvg} alt="Botão para Fechar" className="w-5" />
          </Modal.DialogClose>
        </Modal.Content>
      </Modal.Portal>
    );
  }

  return (
    <Modal.Portal>
      <Modal.DialogOverlay className="fixed inset-0 bg-gray-200/50" />

      <Modal.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-600 min-w-110">
        <Modal.Title className="py-5 px-7">
          <Text variant={"text-md-bold"}>{title}</Text>
        </Modal.Title>

        <div className="border-b border-gray-500 rounded-full" />

        <Modal.Description className="">{description}</Modal.Description>

        <form action="" className="py-5 px-7 flex flex-col gap-4">
          <FormsInput.InputRoot>
            <FormsInput.InputLabel children={firstLabel} htmlFor="first" />
            <FormsInput.InputControl
              id="first"
              placeholder={firstPlaceholder}
              onChange={(e) => {
                setFValue(e.target.value);
              }}
              value={fValue}
            />
          </FormsInput.InputRoot>
          <FormsInput.InputRoot>
            <FormsInput.InputLabel children={secondLabel} htmlFor="second" />
            <FormsInput.InputControl
              id="second"
              placeholder={secondPlaceholder}
              onChange={(e) => {
                setSValue(e.target.value);
              }}
              value={sValue}
            />
          </FormsInput.InputRoot>

          <Button>Salvar</Button>
        </form>

        <Modal.DialogClose className="cursor-pointer absolute right-2.5 top-3 inline-flex items-center justify-center">
          <img src={XSvg} alt="Botão para Fechar" className="w-5" />
        </Modal.DialogClose>
      </Modal.Content>
    </Modal.Portal>
  );
}
