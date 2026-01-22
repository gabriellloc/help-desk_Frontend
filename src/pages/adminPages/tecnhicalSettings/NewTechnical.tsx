import { useState } from "react";
import { useNavigate } from "react-router";

import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";

import BackSvg from "../../../assets/icons/icon/arrow-left.svg";
import { Input } from "../../../components/Input";
import { AvailabilityButton } from "../../../components/AvailabilityButton";

function NewTechnical() {
  const navigate = useNavigate();
  const [AvailabilityList, setAvailabilityList] = useState<string[]>([]);
  // console.log(AvailabilityList);

  return (
    <div className="bg-gray-600 w-full overflow-auto h-full mt-3 rounded-tl-[20px] py-13 px-12 flex flex-col gap-6">
      <div className="w-full mx-auto flex flex-wrap gap-6 max-w-5xl">
        <div className="min-w-2xs flex-1 flex flex-col items-start">
          <button
            className="flex gap-2 cursor-pointer transition hover:opacity-80"
            onClick={() => navigate(-1)}
          >
            <img src={BackSvg} alt="Voltar" className="w-3.5" />
            <Text>Voltar</Text>
          </button>
          <Text variant={"text-xl"} color={"blue-dark"}>
            Perfil de técnico
          </Text>
        </div>

        <div className="min-w-2xs flex gap-2 items-end max-md:flex-1">
          <Button
            variant={"secondary"}
            classname="flex-1"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>
          <Button variant={"primary"} classname="flex-1">
            Salvar
          </Button>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-wrap gap-6 max-w-5xl">
        <div className="min-w-2xs flex-1 flex flex-col gap-5 border border-gray-500 rounded-[10px] p-6 h-fit">
          <div className="flex flex-col gap-1">
            <Text variant={"text-md-bold"} color={"gray-200"}>
              Dados pessoais
            </Text>
            <Text variant={"text-xs-normal"} color={"gray-300"}>
              Defina as informações do perfil de técnico
            </Text>
          </div>

          <div className="flex flex-col gap-0.5">
            <form className="flex flex-col gap-4">
              <Input
                name="nome"
                children={"Nome"}
                type="text"
                label={"labelDefault"}
                input={"inputDefault"}
                SError={"errorDefault"}
                placeholder={"Nome completo"}
                error={""} // Nunca definir error aqui
                htmlFor="nome"
              />
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
                placeholder={"Defina a senha de acesso"}
                error={""} // Nunca definir error aqui
                htmlFor="password"
              />
            </form>
          </div>
        </div>

        <div className="min-w-2xs flex-2 flex flex-col gap-8 border border-gray-500 rounded-[10px] p-6 h-fit">
          <section className="flex flex-col gap-1">
            <Text variant={"text-md-bold"} color={"gray-200"}>
              Horários de atendimento
            </Text>
            <Text variant={"text-xs-normal"} color={"gray-300"}>
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </Text>
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Text variant={"text-xxs"} color={"gray-300"}>
                Manhã
              </Text>
              <div className="flex gap-2 flex-wrap">
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("07:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "07:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "07:00"]);
                  }}
                >
                  07:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("08:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "08:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "08:00"]);
                  }}
                >
                  08:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("09:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "09:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "09:00"]);
                  }}
                >
                  09:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("10:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "10:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "10:00"]);
                  }}
                >
                  10:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("11:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "11:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "11:00"]);
                  }}
                >
                  11:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("12:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "12:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "12:00"]);
                  }}
                >
                  12:00
                </AvailabilityButton>
              </div>
            </div>
            <div>
              <Text variant={"text-xxs"} color={"gray-300"}>
                Tarde
              </Text>
              <div className="flex gap-2 flex-wrap">
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("13:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "13:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "13:00"]);
                  }}
                >
                  13:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("14:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "14:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "14:00"]);
                  }}
                >
                  14:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("15:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "15:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "15:00"]);
                  }}
                >
                  15:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("16:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "16:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "16:00"]);
                  }}
                >
                  16:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("17:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "17:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "17:00"]);
                  }}
                >
                  17:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("18:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "18:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "18:00"]);
                  }}
                >
                  18:00
                </AvailabilityButton>
              </div>
            </div>
            <div>
              <Text variant={"text-xxs"} color={"gray-300"}>
                Noite
              </Text>
              <div className="flex gap-2 flex-wrap">
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("19:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "19:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "19:00"]);
                  }}
                >
                  19:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("20:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "20:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "20:00"]);
                  }}
                >
                  20:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("21:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "21:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "21:00"]);
                  }}
                >
                  21:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("22:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "22:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "22:00"]);
                  }}
                >
                  22:00
                </AvailabilityButton>
                <AvailabilityButton
                  onMouseDown={() => {
                    if (AvailabilityList.includes("23:00")) {
                      setAvailabilityList((prev) =>
                        prev.filter((item) => item !== "23:00"),
                      );
                      return;
                    }
                    setAvailabilityList((prev) => [...prev, "23:00"]);
                  }}
                >
                  23:00
                </AvailabilityButton>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export { NewTechnical };
