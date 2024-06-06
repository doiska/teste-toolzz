import { Label } from "@/components/ui/label.tsx";
import { InputWithIcon } from "@/components/ui/input-with-icon.tsx";
import {
  FaLock,
  FaRightToBracket as FaSignIn,
  FaUser
} from "react-icons/fa6";
import { Button } from "@/components/ui/button.tsx";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "@/lib/constants.ts";
import type { FormEvent } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

export function LoginForm() {

  const { mutate, error, isSuccess } = useMutation({
    mutationKey: ["/auth/login"],
    mutationFn: async (payload: {
      username: string,
      password: string,
      rememberMe?: boolean,
      captcha?: string
    }) => {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const content = await response.json();

      if (response.status !== 200) {
        if ("message" in content) {
          throw new Error(content.message);
        }

        throw new Error("Ocorreu um erro inesperado.");
      }

      return content;
    },
    onError: () => {
      // @ts-expect-error Missing cloudflare turnstile types
      window.turnstile.reset();
    }
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("remember_me");
    const captcha = formData.get("cf-turnstile-response") as string;

    mutate({ username, password, rememberMe: !!rememberMe, captcha });
  };


  return (
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <Label htmlFor="username" className="font-normal">Usuário</Label>
          <InputWithIcon
              id="username"
              name="username"
              type="text"
              placeholder="aluno290_1u"
              icon={<FaUser />}
              className="dark:[&>svg]:text-[#909090] dark:text-[#909090] dark:border-[#909090] dark:bg-background"
              required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="font-normal">Senha</Label>
          <InputWithIcon
              id="password"
              name="password"
              type="password"
              className="dark:[&>svg]:fill-[#909090] dark:text-[#909090] dark:border-[#909090] dark:bg-background"
              placeholder="********"
              icon={<FaLock />}
              required
          />
        </div>
        <div className="flex items-center gap-3">
          <input
              id="remember_me" name="remember_me" type="checkbox" className="size-4 accent-black checked:accent-primary"
          />
          <Label htmlFor="remember_me">Manter conectado</Label>
        </div>
        <div
            className="cf-turnstile w-full [&>iframe]:min-w-full"
            data-sitekey="0x4AAAAAAAcDDqvzWnLpTU_4"
        />
        <div className="flex flex-col">
          <Button type="submit" className="gap-2 w-full text-base font-medium">
            <FaSignIn className="size-5" />
            Entrar
          </Button>
        </div>
        {error && (
            <div
                className="flex items-center gap-2 w-full rounded-lg text-sm p-4 border border-destructive/60 bg-destructive/10"
            >
              <FaExclamationCircle className="text-destructive text-lg" />
              <p>{error && error.message}</p>
            </div>
        )}
        {isSuccess && (
            <div
                className="flex items-center gap-2 w-full rounded-lg text-sm p-4 border border-green-800/60 bg-green-500/10"
            >
              <FaCheckCircle className="text-green-500 text-lg" />
              <p>
                Sucesso! Aguarde o login para continuar.
              </p>
            </div>
        )}
      </form>
  );
}
