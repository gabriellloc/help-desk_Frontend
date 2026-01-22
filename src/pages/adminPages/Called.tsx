import { useNavigate } from "react-router";

import { Status } from "../../components/Status";
import { Text } from "../../components/Text";

import penSvg from "../../assets/icons/icon/pen-line.svg"

interface TypeStatus {
  id: string;
  title: string;
  service: string;
  amount: number;
  customer: string;
  technical: string;
  status: "open" | "closed" | "pending";
  updated_at: string;
}

const users: TypeStatus[] = [
  {
    id: "0003",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
  {
    id: "0004",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "Aline Souza",
    technical: "Carlos Silva",
    status: "open",
    updated_at: "10/12/2025 15:20",
  },
  {
    id: "0005",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "pending",
    updated_at: "12/12/2025 10:15",
  },
	{
    id: "0010",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0011",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0013",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0015",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0020",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0021",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0023",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0025",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0030",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
	{
    id: "0031",
    title: "Rede Lenta",
    service: "Instalação de rede",
    amount: 180,
    customer: "André Costa",
    technical: "Carlos Silva",
    status: "closed",
    updated_at: "12/12/2025 20:56",
  },
];

function Called() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-600 w-full overflow-auto h-full mt-3 rounded-tl-[20px] py-13 px-12 flex flex-col gap-6">
      <div>
        <Text variant={"text-xl"} color={"blue-dark"}>
          Chamados
        </Text>
      </div>

      <div className="w-full border border-gray-500 rounded-[10px] overflow-auto">
        <table className="w-full">
          <thead className="border-b border-gray-500">
            <tr className="text-left">
              <th className="p-3">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Atualizado em
                </Text>
              </th>
              <th className="p-3">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Id
                </Text>
              </th>
              <th className="p-3">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Título e Serviços
                </Text>
              </th>
              <th className="p-3 max-lg:hidden">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Valor total
                </Text>
              </th>
              <th className="p-3 max-lg:hidden">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Cliente
                </Text>
              </th>
              <th className="p-3 max-lg:hidden">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Técnico
                </Text>
              </th>
              <th className="p-3">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Status
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="border-b border-gray-500" key={user.id}>
                <td className="p-3">
                  <Text variant={"text-xs-normal"} color={"gray-200"}>
                    {user.updated_at}
                  </Text>
                </td>
                <td className="p-3">
                  <Text variant={"text-xs-bold"} color={"gray-200"}>
                    {user.id}
                  </Text>
                </td>
                <td className="p-3 flex flex-col">
                  <Text variant={"text-sm-bold"}>{user.title}</Text>
                  <Text variant={"text-xs-normal"}>{user.service}</Text>
                </td>
                <td className="p-3 max-lg:hidden">
                  <Text variant={"text-sm-normal"}>R$ {user.amount}</Text>
                </td>
                <td className="p-3 max-lg:hidden">
                  <Text variant={"text-sm-normal"}>{user.customer}</Text>
                </td>
                <td className="p-3 max-lg:hidden">
                  <Text variant={"text-sm-normal"}>{user.technical}</Text>
                </td>
                <td className="p-3">
                  <Text variant={"text-sm-normal"}>
                    {user.status === "open" ? (
                      <Status
                        icon="openSvg"
                        children="Aberto"
                        variant={"open"}
                      />
                    ) : user.status === "closed" ? (
                      <Status
                        icon="closedSvg"
                        children="Encerrado"
                        variant={"closed"}
                      />
                    ) : (
                      <Status
                        icon="pendingSvg"
                        children="Em atendimento"
                        variant={"pending"}
                      />
                    )}
                  </Text>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      navigate(`${user.id}/detalhes`);
                    }}
										className="w-7 h-7 bg-gray-500 flex justify-center items-center rounded-[5px] cursor-pointer transition hover:opacity-60"
                  >
										<img src={penSvg} alt="Ir para serviço" className="w-3.5" />
									</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { Called };
