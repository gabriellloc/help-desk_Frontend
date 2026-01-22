import { useNavigate } from "react-router";

import { Button } from "../../components/Button";
import { Text } from "../../components/Text";

import penSvg from "../../assets/icons/icon/pen-line.svg";
import PlusSvg from "../../assets/icons/icon/plus.svg";
import { AvailabilityIcon } from "../../components/AvailabilityIcon";

const availability = [
  ["09:00", "10:00", "11:00", "08:00"],
  ["09:00", "10:00", "11:00", "08:00", "17:00"],
  ["13:00", "14:00", "15:00", "16:00"],
  ["13:00", "14:00", "15:00", "16:00", "09:00", "10:00", "11:00", "08:00"],
];

const technicians = [
  {
    id: 1,
    nome: "Carlos Silva",
    email: "carlos.silva@test.com",
    disponibilidade: availability[0],
  },
  {
    id: 2,
    nome: "Ana Oliveira",
    email: "ana.oliveira@test.com",
    disponibilidade: availability[1],
  },
  {
    id: 3,
    nome: "Cíntia Lúcia",
    email: "cintia.lucia@test.com",
    disponibilidade: availability[2],
  },
  {
    id: 4,
    nome: "Marcos Alves",
    email: "marcos.alves@test.com",
    disponibilidade: availability[3],
  },
];

function Technical() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-600 w-full overflow-auto h-full mt-3 rounded-tl-[20px] py-13 px-12 flex flex-col gap-6">
      <div className="flex justify-between">
        <Text variant={"text-xl"} color={"blue-dark"}>
          Técnicos
        </Text>

        <Button onClick={() => {navigate("novo")}}>
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
                  Nome
                </Text>
              </td>
              <td className="p-3 max-lg:hidden">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  E-mail
                </Text>
              </td>
              <td className="p-3">
                <Text variant={"text-sm-bold"} color={"gray-400"}>
                  Disponibilidade
                </Text>
              </td>
            </tr>
          </thead>
          <tbody>
            {technicians.map((technical) => (
              <tr className="border-b border-gray-500" key={technical.id}>
                <td className="p-3">
                  <Text>{technical.nome}</Text>
                </td>
                <td className="p-3 max-lg:hidden">
                  <Text>{technical.email}</Text>
                </td>
                <td className="p-3 flex gap-1">
                  {technical.disponibilidade.map((disp, index) =>
                    index < 4 ? (
                      <AvailabilityIcon key={index}>{disp}</AvailabilityIcon>
                    ) : index == 4 ? (
                      <AvailabilityIcon key={index + 1}>
                        +{technical.disponibilidade.length - 4}
                      </AvailabilityIcon>
                    ) : null,
                  )}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      navigate(`${technical.id}/edit`);
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

export { Technical };
