import { Outlet, useNavigate, useLocation } from "react-router";

// Image
import LogoLight from "../assets/icons/Logo_IconLight.svg";
import { Text } from "../components/Text";
import { Button } from "../components/Button";

function AuthenticatedLayout() {
  const navigate = useNavigate();
  let url = useLocation();

  return (
    <div
      className={`max-w-full w-screen h-screen min-h-fit bg-[url(/src/assets/images/Login_Background.png)] bg-no-repeat bg-cover 
			pt-3
			flex justify-end
			`}
    >
      <div className="bg-gray-600 w-screen min-h-full rounded-t-[20px] flex flex-col gap-8 items-center py-12 px-35 md:min-w-170 md:w-fit md:rounded-none md:rounded-tl-[20px]">
        <div className="flex items-center gap-3">
          <img src={LogoLight} alt="Logo" className="w-10" />
          <Text variant={"text-xl"} color={"blue-dark"}>
            HelpDesk
          </Text>
        </div>

        <div className="flex flex-col gap-3 h-full w-full">
          <div className="w-full h-fit border border-gray-500 rounded-[10px]">
            <Outlet />
          </div>

          <div className="flex flex-col border border-gray-500 rounded-[10px] p-7 gap-6">
            <div className="flex flex-col gap-0.5">
              <Text variant={"text-md-bold"} color={"gray-200"}>
                {url.pathname === "/"
                  ? "Ainda não tem uma conta?"
                  : "Já tem uma conta?"}
              </Text>
              <Text variant={"text-xs-normal"} color={"gray-300"}>
                {url.pathname === "/"
                  ? "Cadastre agora mesmo"
                  : "Entre agora mesmo"}
              </Text>
            </div>

            <Button
              variant={"secondary"}
              onClick={() => {
                if (url.pathname === "/") {
                  navigate("/signUp");
                } else {
                  navigate("/");
                }
              }}
            >
              {url.pathname === "/" ? "Criar conta" : "Acessar conta"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AuthenticatedLayout };
