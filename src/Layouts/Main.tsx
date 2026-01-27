import { useRef, useState } from "react";
import { Outlet, useLocation, NavLink, useNavigate } from "react-router";

import { Text } from "../components/Text";

import Logo from "../assets/icons/Logo_IconDark.svg";
import AvatarPng from "../assets/images/Avatar.png";
import ClipboardSvg from "../assets/icons/icon/clipboard-list.svg";
import UsersSvg from "../assets/icons/icon/users.svg";
import businessSvg from "../assets/icons/icon/briefcase-business.svg";
import wrenchSvg from "../assets/icons/icon/wrench.svg";
import PlusSvg from "../assets/icons/icon/plus.svg";
import menuSvg from "../assets/icons/icon/menu.svg";
import logOutSvg from "../assets/icons/icon/log-out.svg";

interface MainLayoutProps {
  type: "admin" | "technical" | "customer";
}

function MainLayout({ type }: MainLayoutProps) {
  const [OpenModal, setOpenModal] = useState(false);

  const menuBar = useRef<HTMLInputElement>(null);
  let url = useLocation();
  const navigate = useNavigate();

  function handleMenuBar() {
    if (menuBar.current === null) {
      return;
    }
    if (menuBar.current.classList.contains("max-lg:h-fit")) {
      menuBar.current.classList.replace(`max-lg:h-fit`, `max-lg:h-0`);
      menuBar.current.classList.replace(`flex`, `max-lg:hidden`);
      menuBar.current.classList.replace(
        "max-lg:opacity-100",
        `max-lg:opacity-0`,
      );
    } else {
      menuBar.current.classList.replace("max-lg:h-0", `max-lg:h-fit`);
      menuBar.current.classList.replace(`max-lg:hidden`, "flex");
      menuBar.current.classList.replace(
        "max-lg:opacity-0",
        `max-lg:opacity-100`,
      );
    }
  }

  return (
    <div className="h-screen bg-gray-100 flex max-lg:flex-col">
      <aside className="flex flex-col min-w-fit max-lg:flex-row max-lg:w-full max-lg:justify-between">
        <div>
          <div className="flex items-center gap-3 p-6 border-b border-gray-200">
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => {
                handleMenuBar();
              }}
            >
              <img src={menuSvg} alt="Menu" />
            </button>
            <div className="w-11">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="flex flex-col">
              <Text variant={"text-lg"} color={"gray-600"}>
                HelpDesk
              </Text>
              <Text variant={"text-xxs"} color={"blue-light"}>
                {type == "admin"
                  ? "admin"
                  : type == "customer"
                    ? "cliente"
                    : "técnico"}
              </Text>
            </div>
          </div>

          <div
            ref={menuBar}
            className="flex max-lg:hidden flex-col h-full opacity-100 gap-1 mt-5 mx-4 max-lg:h-0 max-lg:opacity-0"
          >
            <NavLink
              to={`/${type}`}
              className={
                url.pathname == `/${type}`
                  ? "flex gap-2 text-gray-500 p-3 bg-blue-dark rounded-[5px]"
                  : "flex gap-2 text-gray-500 p-3 opacity-70 rounded-[5px] hover:bg-blue-base"
              }
            >
              <img src={ClipboardSvg} className="w-5" />
              {type == "admin"
                ? "Chamados"
                : type == "technical"
                  ? "Meus chamados"
                  : "Meus chamados"}
            </NavLink>

            <NavLink
              hidden={type !== "admin"}
              to={"/admin/tecnicos"}
              className={
                url.pathname == "/admin/tecnicos"
                  ? "flex gap-2 text-gray-500 p-3 bg-blue-dark rounded-[5px]"
                  : "flex gap-2 text-gray-500 p-3 opacity-70 rounded-[5px] hover:bg-blue-dark"
              }
            >
              <img
                src={UsersSvg}
                className="w-5 text-blue-base fill-blue-base stroke-blue-base"
              />
              Técnicos
            </NavLink>

            <NavLink
              hidden={type !== "admin"}
              to={"/admin/clientes"}
              className={
                url.pathname == "/admin/clientes"
                  ? "flex gap-2 text-gray-500 p-3 bg-blue-dark rounded-[5px]"
                  : "flex gap-2 text-gray-500 p-3 opacity-70 rounded-[5px] hover:bg-blue-dark"
              }
            >
              <img src={businessSvg} className="w-5" />
              Clientes
            </NavLink>

            <NavLink
              hidden={type !== "admin"}
              to={"/admin/servicos"}
              className={
                url.pathname == "/admin/servicos"
                  ? "flex gap-2 text-gray-500 p-3 bg-blue-dark rounded-[5px]"
                  : "flex gap-2 text-gray-500 p-3 opacity-70 rounded-[5px] hover:bg-blue-dark"
              }
            >
              <img src={wrenchSvg} className="w-5" />
              Serviços
            </NavLink>

            <NavLink
              hidden={type !== "customer"}
              to={"novo-chamado"}
              className={
                url.pathname == "/customer/novo-chamado"
                  ? "flex gap-2 text-gray-500 p-3 bg-blue-dark rounded-[5px]"
                  : "flex gap-2 text-gray-500 p-3 opacity-70 rounded-[5px] hover:bg-blue-dark"
              }
            >
              <img src={PlusSvg} className="w-5" />
              Novo chamado
            </NavLink>
          </div>
        </div>

        <div
          className="relative flex gap-3 py-5 px-4 border-t-2 border-gray-200 mt-auto max-lg:border-none max-lg:mt-3 cursor-pointer"
          onClick={() => {
            setOpenModal(!OpenModal);
          }}
        >
          <img src={AvatarPng} alt="Seu avatar" className="w-8 h-8" />
          <div className="flex flex-col max-lg:hidden">
            <Text variant={"text-sm-normal"} color={"gray-600"}>
              Usuário {type}
            </Text>
            <Text variant={"text-xs-normal"} color={"gray-400"}>
              user.{type}@test.com
            </Text>
          </div>

          {OpenModal && (
            <div className="absolute flex flex-col gap-4 cursor-default min-w-52 rounded-[10px] bg-gray-100 translate-x-full bottom-4 z-50 px-5 py-4">
              <Text variant={"text-xxs"} color={"gray-400"}>
                Opções
              </Text>
              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  className="cursor-pointer w-fit" /** Profile button */
                >
                  <Text
                    color={"gray-500"}
                    variant={"text-md-normal"}
                    classname="flex gap-2 items-center"
                  >
                    <img src={UsersSvg} className="w-5 h-5" />
                    Perfil
                  </Text>
                </button>
                <button
                  type="button"
                  className="cursor-pointer w-fit"
                  onClick={() => {
                    navigate(-1);
                  }} /** logOut button */
                >
                  <Text
                    color={"feedBack-danger"}
                    variant={"text-md-normal"}
                    classname="flex gap-2 items-center"
                  >
                    <img src={logOutSvg} className="w-5 h-5" />
                    Sair
                  </Text>
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="w-full h-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export { MainLayout };
