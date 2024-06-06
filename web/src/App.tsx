import {
  Header,
} from "@/components/header.tsx";
import { ThirdPartyLogin } from "@/components/third-party-login.tsx";
import { LoginCarousel } from "@/components/login-carousel.tsx";
import { LoginForm } from "@/components/login-form.tsx";

export default function App() {
  return (
      <main className="dark flex flex-col min-h-screen bg-background font-[Inter Variable] text-foreground">
        <div className="flex-1 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          <div className="relative hidden bg-muted lg:block lg:col-span-1 xl:col-span-2 overflow-hidden">
            <LoginCarousel />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-6 lg:p-12">
            <Header />

            <div className="mx-auto grid w-full gap-6 p-6 lg:p-0">
              <div className="grid gap-2">
                <h1 className="text-3xl font-medium">Boas-vindas!</h1>
                <p className="text-balance text-muted-foreground font-medium">
                  Entre utilizando uma das opções abaixo
                </p>
              </div>
              <div className="grid gap-6">
                <ThirdPartyLogin />

                <div className="flex items-center">
                  <hr className="flex-grow border-t border-neutral-900/10 dark:border-[#2e2e2e]" />
                  <span className="text-base text-muted px-4 font-medium uppercase lg:lowercase">ou</span>
                  <hr className="flex-grow border-t border-neutral-900/10 dark:border-[#2e2e2e]" />
                </div>

                <LoginForm />
              </div>
              <div className="mt-4 text-center text-muted font-normal">
                Esqueceu sua senha? {" "}
                <a
                    href="#"
                    className="text-neutral-950 dark:text-zinc-100 font-bold md:font-medium md:text-primary underline-offset-2"
                >
                  Recuperar senha
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
