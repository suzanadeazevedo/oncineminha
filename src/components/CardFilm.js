"use client";
import { Star } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorito } from "@/hooks/useFavorito";
import { useEffect } from "react";

export default function CardFilm({ filme }) {
  const { title, vote_average, poster_path } = filme;
  const poster_url = `https://image.tmdb.org/t/p/w200${poster_path}`;
  const { favorito, favoritar, desfavoritar, carregarDados } =
    useFavorito(filme);

  useEffect(carregarDados, []);

  return (
    <div className="flex flex-col items-center w-40 relative">
      {favorito ? (
        <FavoriteIcon
          className="text-rose-600 absolute right-1 top-1 cursor-pointer "
          onClick={desfavoritar}
        />
      ) : (
        <FavoriteBorderIcon
          className="text-white absolute right-1 top-1 cursor-pointer "
          onClick={favoritar}
        />
      )}
      <img className="rounded" src={poster_url} alt="Poster do Filme" />
      <span className="text-center line-clamp-1 font-bold">{title}</span>
      <div className="flex gap-1 items-center ">
        <Star color="#ffc800" size={18} />
        <span className="text-zinc-500 text-center">
          {vote_average.toFixed(1)}
        </span>
      </div>
      <a
        href="#"
        className="bg-cyan-600 rounded w-full text-center m-1 py-1 text-white"
      >
        Detalhes
      </a>
    </div>
  );
}
