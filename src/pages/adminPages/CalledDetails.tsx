import { useNavigate } from "react-router";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Status } from "../../components/Status";

import AvatarTechnical from "../../assets/images/Avatar.png";
import BackSvg from "../../assets/icons/icon/arrow-left.svg";
import doneSvg from "../../assets/icons/icon/circle-check-big-gray.svg";
import clockSvg from "../../assets/icons/icon/clock-2-gray.svg";

function CalledDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-600 w-full overflow-auto h-full mt-3 rounded-tl-[20px] py-13 px-12 flex flex-col gap-6">
      <div className="w-full mx-auto flex flex-wrap gap-6 max-w-3xl">
        <div className="min-w-2xs flex-1 flex flex-col items-start">
          <button
            className="flex gap-2 cursor-pointer transition hover:opacity-80"
            onClick={() => navigate(-1)}
          >
            <img src={BackSvg} alt="Voltar" className="w-3.5" />
            <Text>Voltar</Text>
          </button>
          <Text variant={"text-xl"} color={"blue-dark"}>
            Chamado detalhado
          </Text>
        </div>

        <div className="min-w-2xs flex flex-1 gap-2 items-end">
          <Button variant={"secondary"} classname="flex-1">
            <img src={clockSvg} className="w-4" />
            Em atendimento
          </Button>
          <Button variant={"secondary"} classname="flex-1">
            <img src={doneSvg} className="w-4" />
            Encerrado
          </Button>
        </div>
      </div>

      {/* Parte de baixo */}
      <div className="w-full mx-auto flex flex-wrap gap-6 max-w-3xl">
        <div className="min-w-2xs flex-1 flex flex-col gap-5 border border-gray-500 rounded-[10px] p-6 h-fit">
          <div>
            <div className="flex justify-between items-center">
              <Text variant={"text-xs-bold"} color={"gray-300"}>
                0003
              </Text>
              <Status children="Aberto" icon="openSvg" variant={"open"} />
            </div>

            <Text variant={"text-md-bold"} color={"gray-200"}>
              Backup não está funcionando
            </Text>
          </div>

          <div className="flex flex-col gap-0.5">
            <Text color={"gray-400"} variant={"text-xs-bold"}>
              Descrição
            </Text>
            <Text color={"gray-200"} variant={"text-sm-normal"}>
              O sistema de backup automático parou de funcionar. Última execução
              bem-sucedida foi há uma semana.
            </Text>
          </div>

          <div className="flex flex-col">
            <Text color={"gray-400"} variant={"text-xs-bold"}>
              Categoria
            </Text>
            <Text color={"gray-200"} variant={"text-sm-normal"}>
              Recuperação de Dados
            </Text>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="flex-1 flex flex-col">
              <Text color={"gray-400"} variant={"text-xs-bold"}>
                Criado em
              </Text>
              <Text color={"gray-200"} variant={"text-sm-normal"}>
                12/04/25 09:12
              </Text>
            </div>
            <div className="flex-1 flex flex-col">
              <Text color={"gray-400"} variant={"text-xs-bold"}>
                Atualizado em
              </Text>
              <Text color={"gray-200"} variant={"text-sm-normal"}>
                12/04/25 15:20
              </Text>
            </div>
          </div>

          <div className="flex flex-col">
            <Text color={"gray-400"} variant={"text-xs-bold"}>
              Cliente
            </Text>
            <Text color={"gray-200"} variant={"text-sm-normal"}>
              André Costa
            </Text>
          </div>
        </div>

        <div className="min-w-2xs flex-1 flex flex-col gap-8 border border-gray-500 rounded-[10px] p-6 h-fit">
          <section className="flex flex-col gap-2">
            <Text variant={"text-xs-bold"} color={"gray-400"}>
              Técnicos responsável
            </Text>
            <div className="flex gap-2">
              <img src={AvatarTechnical} alt="" className="w-8 h-8" />
              <div className="flex flex-col">
                <Text variant={"text-sm-normal"} color={"gray-200"}>
                  Carlos Silva
                </Text>
                <Text variant={"text-xs-normal"} color={"gray-300"}>
                  carlos.silva@test.com
                </Text>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Text variant={"text-xs-bold"} color={"gray-400"}>
                Valores
              </Text>
              <div className="flex justify-between">
                <Text variant={"text-xs-normal"} color={"gray-200"}>
                  Preço base
                </Text>
                <Text variant={"text-xs-normal"} color={"gray-200"}>
                  R$ 200,00
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Text variant={"text-xs-bold"} color={"gray-400"}>
                Adicionais
              </Text>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <Text variant={"text-xs-normal"} color={"gray-200"}>
                    Assinatura de backup
                  </Text>
                  <Text variant={"text-xs-normal"} color={"gray-200"}>
                    R$ 120,00
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Text variant={"text-xs-normal"} color={"gray-200"}>
                    Formatação do PC
                  </Text>
                  <Text variant={"text-xs-normal"} color={"gray-200"}>
                    R$ 75,00
                  </Text>
                </div>
              </div>
            </div>
            <hr className="text-gray-500" />

            <div className="flex justify-between gap-2">
              <Text variant={"text-sm-bold"} color={"gray-200"}>
                Total
              </Text>
              <Text variant={"text-sm-bold"} color={"gray-200"}>
                R$395,00
              </Text>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export { CalledDetails };
