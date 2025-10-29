import { FilmIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-800">
      <Link href="/">
        <h1 className=" flex itens-center gap-2 text-3x1 text-amber-400 font-bold">
          <FilmIcon className="h-8 w-8" />
          OnCineminha
        </h1>
      </Link>
      <Link className="text-2x1 text-amber-50" href="/sobre">
        Sobre
      </Link>
    </nav>
  );
}
