import NavBar from "@/components/NavBar";
import Image from "next/image";

import react_icon from "@/img/react_icon.png";
import nextjs_icon from "@/img/nextjs_icon_212861.png";
import tmdb_icon from "@/img/tmdb_icon.svg";

export default function Sobre() {
  return (
    <>
      <NavBar />

      <main>
        <div className="flex flex-col items-center justify-center p-10 gap-6">
          <div className="p-15 pb-20 font-bold text-4xl ">
            <h2>Sobre</h2>
          </div>
          <div className="text-lg">
            <p className="p-2">
              Este projeto é uma Single Page Application (SPA) desenvolvida para
              fins de estudo e prática de desenvolvimento front-end.
            </p>
            <p className="p-2">
              A aplicação foi construída com React e Next.js, realizando o
              consumo da API do The Movie Database (TMDB) para exibição dos
              filmes em alta.
            </p>
            <p className="p-2">
              O projeto tem como objetivo aplicar conceitos como
              componentização, rotas, consumo de APIs e organização de código.
            </p>
          </div>
          <div className=" flex flex-row h-60 w-210 justify-center items-center align-middle pt-40  ">
            <div>
              <Image
                src={react_icon}
                className="h-1/2 w-1/2"
                alt="React logo"
              ></Image>
            </div>
            <div>
              <Image
                src={nextjs_icon}
                className="h-1/2 w-1/2"
                alt="Next.js logo"
              ></Image>
            </div>
            <div>
              <Image
                src={tmdb_icon}
                className="size-full"
                alt="TMDB logo"
              ></Image>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
