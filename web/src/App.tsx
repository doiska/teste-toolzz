import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  SignIn,
  User,
  Lock,
} from "@phosphor-icons/react";
import { InputWithIcon } from "@/components/ui/input-with-icon.tsx";
import {
  FaApple,
  FaFacebook,
  FaTwitter
} from "react-icons/fa6";
import { ToolzLogo } from "@/components/icons/toolz-logo.tsx";
import { Header } from "@/components/header.tsx";

const thirdParties = [
  {
    name: "Toolzz",
    icon: ToolzLogo,
    url: "toolzz"
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "facebook"
  },
  {
    name: "Apple",
    icon: FaApple,
    url: "apple"
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "twitter"
  }
];

export default function App() {
  return (
      <main className="flex flex-col min-h-screen bg-background font-[Inter Variable]">
        <div className="flex-1 lg:grid lg:grid-cols-3">
          <div className="relative hidden bg-muted lg:block col-span-2">
            <img
                src="/carousel_1.jpg"
                alt="Image"
                className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-6 p-6 lg:p-12">
            <Header />

            <div className="mx-auto grid w-full gap-6">
              <div className="grid gap-2">
                <h1 className="text-3xl font-medium">Boas-vindas!</h1>
                <p className="text-balance text-muted-foreground font-medium">
                  Entre utilizando uma das opções abaixo
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 justify-between">
                  {thirdParties.map(({ url, icon: Icon }) => (
                      <Button asChild={true} size="icon" variant="outline" className="w-1/2 lg:w-full text-lg">
                        <a href={`/oauth/${url}`}>
                          <Icon />
                        </a>
                      </Button>
                  ))}
                </div>

                <div className="flex items-center">
                  <hr className="flex-grow border-t border-neutral-900/10" />
                  <span className="text-base text-muted px-4 font-medium uppercase lg:lowercase">ou</span>
                  <hr className="flex-grow border-t border-neutral-900/10" />
                </div>

                <form className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="username" className="font-normal">Usuário</Label>
                    <InputWithIcon
                        id="username"
                        type="text"
                        placeholder="aluno290_1u"
                        icon={<User />}
                        required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="font-normal">Senha</Label>
                    <InputWithIcon
                        id="password"
                        type="password"
                        placeholder="********"
                        icon={<Lock />}
                        required
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <input id="remember_me" type="checkbox" className="size-4" />
                    <Label htmlFor="remember_me">Manter conectado</Label>
                  </div>
                  <div className="flex flex-col">
                    <Button type="submit" className="gap-2 w-full text-base font-medium">
                      <SignIn className="size-5" />
                      Entrar
                    </Button>
                  </div>
                </form>
              </div>
              <div className="mt-4 text-center text-muted font-normal">
                Esqueceu sua senha? {" "}
                <a href="#" className="text-neutral-950 dark:text-zinc-100 font-bold md:font-medium md:text-primary underline-offset-2">
                  Recuperar senha
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
