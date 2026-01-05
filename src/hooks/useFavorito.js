import { useState } from "react";

export function useFavorito(filme) {
  const [favorito, setFavorito] = useState(false);

  function favoritar() {
    setFavorito(true);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTQ1YzAwZDdlMjg0YTI0YTU5ZjBjMzVhNWVmNTFlZSIsIm5iZiI6MTc2NzU2MjQxOS4wNzUsInN1YiI6IjY5NWFkY2IzMGM0OGQ1NTZlY2MzN2M0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VSycwL0sTbjE5qILLJtsBUzeo3PqvH-MCiRjK0wsUc",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: filme.id,
        watchlist: true,
      }),
    };

    fetch("https://api.themoviedb.org/3/account/22622569/watchlist", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    /* const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.push(filme);
    localStorage.setItem("favoritos", JSON.stringify(favoritos)); */
  }

  function desfavoritar() {
    setFavorito(false);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTQ1YzAwZDdlMjg0YTI0YTU5ZjBjMzVhNWVmNTFlZSIsIm5iZiI6MTc2NzU2MjQxOS4wNzUsInN1YiI6IjY5NWFkY2IzMGM0OGQ1NTZlY2MzN2M0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VSycwL0sTbjE5qILLJtsBUzeo3PqvH-MCiRjK0wsUc",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: filme.id,
        watchlist: false,
      }),
    };

    fetch("https://api.themoviedb.org/3/account/22622569/watchlist", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    /*   const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritosAtualizado = favoritos.filter(
      (f) => f.titulo !== filme.titulo
    );
    localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado)); */
  }

  function carregarDados() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTQ1YzAwZDdlMjg0YTI0YTU5ZjBjMzVhNWVmNTFlZSIsIm5iZiI6MTc2NzU2MjQxOS4wNzUsInN1YiI6IjY5NWFkY2IzMGM0OGQ1NTZlY2MzN2M0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VSycwL0sTbjE5qILLJtsBUzeo3PqvH-MCiRjK0wsUc",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/account/22622569/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        const favoritos = res.results;
        const favorito = favoritos.find((f) => f.id === filme.id);
        setFavorito(favorito);
      })
      .catch((err) => console.error(err));
  }

  return {
    favorito,
    favoritar,
    desfavoritar,
    carregarDados,
  };
}
