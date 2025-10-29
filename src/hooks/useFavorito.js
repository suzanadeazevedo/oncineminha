import { useState } from "react";

export function useFavorito(filme) {
  const [favorito, setFavorito] = useState(false);

  function favoritar() {
    setFavorito(true);
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.push(filme);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  function desfavoritar() {
    setFavorito(false);
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritosAtualizado = favoritos.filter(
      (f) => f.titulo !== filme.titulo
    );
    localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado));
  }

  function carregarDados() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favorito = favoritos.find((f) => f.titulo === filme.titulo);
    setFavorito(favorito);
  }

  return {
    favorito,
    favoritar,
    desfavoritar,
    carregarDados,
  };
}
