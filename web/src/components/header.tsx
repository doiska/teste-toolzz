import { FaCopyright } from "react-icons/fa6";

export function Header() {
  return (
      <header className="flex justify-between py-6">
        <div className="flex gap-2 items-center">
          <div className="flex items-center justify-center size-8 bg-black border-2 border-primary rounded">
            <span className="text-xl font-bold text-white p-0.5">Tz</span>
          </div>
          <div className="relative text-xl font-bold text-neutral-900">
            <span>Toolzz</span>
            <FaCopyright className="inline-block text-xs ml-0.5 -translate-y-1.5" />
          </div>
        </div>
        <a className="text-primary font-medium">
          Criar conta
        </a>
      </header>
  );
}
