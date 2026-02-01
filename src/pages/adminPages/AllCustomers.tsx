import { useState } from "react";

import { Text } from "../../components/Text";

import penSvg from "../../assets/icons/icon/pen-line.svg";
import trashSvg from "../../assets/icons/icon/trash.svg";
import { ModalRegister } from "../../components/ModalRegister";
import * as Modal from "@radix-ui/react-dialog";
import { Dialog } from "../../components/Dialog";

type User = {
  id: number;
  name: string;
  email: string;
};

const customers: User[] = [
  {
    id: 1,
    name: "André Costa",
    email: "andre.costa@test.com",
  },
  {
    id: 2,
    name: "Julia Maria",
    email: "julia.maria@test.com",
  },
  {
    id: 3,
    name: "Marcelo Andrade",
    email: "marcelo.andrade@test.com",
  },
];

function AllCustomers() {
  const [deleteUser, setDeleteUser] = useState<User | null>();

  return (
    <div className="bg-gray-600 w-full overflow-auto h-full mt-3 rounded-tl-[20px] py-13 px-12 flex flex-col gap-6">
      <Text variant={"text-xl"} color={"blue-dark"}>
        Clientes
      </Text>

      <div className="w-full border border-gray-500 rounded-[10px] overflow-auto">
        <table className="w-full">
          <thead className="border-b border-gray-500">
            <tr className="text-left">
              <td className="p-3">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Nome
                </Text>
              </td>
              <td className="p-3 max-lg:hidden">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  E-mail
                </Text>
              </td>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr className="border-b border-gray-500" key={customer.id}>
                <td className="p-3">
                  <Text>{customer.name}</Text>
                </td>
                <td className="p-3 max-lg:hidden">
                  <Text>{customer.email}</Text>
                </td>

                <td className="flex py-3 gap-2">
                  {/* Botão / Modal de deletar usuário */}
                  <Modal.Root>
                    <Modal.Trigger>
                      <button className="w-7 h-7 bg-gray-500 flex justify-center items-center rounded-[5px] cursor-pointer transition hover:opacity-60">
                        <img
                          src={trashSvg}
                          alt="Remover cliente"
                          className="w-3.5"
                        />
                      </button>
                    </Modal.Trigger>
                    <Dialog
                      title="Excluir Cliente"
                      description={`Deseja realmente excluir ${customer.name}?`}
                      type="deleteUser"
                    />
                  </Modal.Root>
                  {/* Botão / Modal de editar usuário */}
                  <Modal.Root>
                    <Modal.Trigger asChild>
                      <button
                        className="w-7 h-7 bg-gray-500 flex justify-center items-center rounded-[5px] cursor-pointer transition hover:opacity-60"
                        // onClick={() => setSelectedUser(customer)}
                      >
                        <img
                          src={penSvg}
                          alt="Editar cliente"
                          className="w-3.5"
                        />
                      </button>
                    </Modal.Trigger>

                    <Dialog
                      title="Cliente"
                      firstLabel="Nome"
                      firstValue={customer.name}
                      secondLabel="E-mail"
                      secondValue={customer.email}
                    />
                  </Modal.Root>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteUser && (
        <ModalRegister
          type="Excluir Cliente"
          user={deleteUser}
          onClose={() => setDeleteUser(null)}
        />
      )}
    </div>
  );
}

export { AllCustomers };
