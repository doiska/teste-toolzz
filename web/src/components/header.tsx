import {
  FaChevronLeft,
  FaCopyright
} from "react-icons/fa6";

export function Header() {
  return (
      <>
        <HeaderMain />
        <HeaderMobile />
      </>
  );
}

function HeaderMain() {
  return (
      <header className="hidden lg:flex justify-between py-6">
        <div className="flex gap-2 items-center">
          <div className="flex items-center justify-center size-8 bg-black border-2 border-primary rounded">
            <span className="text-xl font-bold text-white p-0.5">Tz</span>
          </div>
          <div className="relative text-xl font-bold text-neutral-900 dark:text-accent-foreground">
            <span>Toolzz</span>
            <FaCopyright className="inline-block text-xs ml-0.5 -translate-y-1.5" />
          </div>
        </div>
        <a href="/auth/register" className="text-primary font-medium">
          Criar conta
        </a>
      </header>
  );
}

function HeaderMobile() {
  return (
      <header className="flex flex-col gap-6 lg:hidden">
        <div className="flex items-center justify-between border-b border-neutral-900/10 dark:border-[#2e2e2e] p-6">
          <button className="size-12 rounded-full border border-white">
            <FaChevronLeft className="size-full p-3" />
          </button>
          <a href="/auth/register" className="text-accent-foreground font-medium text-2xl">
              Criar conta
          </a>
        </div>
        <div className="flex gap-2 items-center px-6">
          <div className="flex items-center justify-center size-12 bg-black border-2 border-primary rounded">
            <span className="text-2xl font-bold text-white">Tz</span>
          </div>
          <div className="relative text-3xl font-medium text-neutral-900 dark:text-accent-foreground">
            <span>Toolzz</span>
            <FaCopyright className="inline-block text-xs ml-0.5 -translate-y-1.5" />
          </div>
        </div>
      </header>
  );
}
