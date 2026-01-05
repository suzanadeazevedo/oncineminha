import NavBar from "@/components/NavBar";
import Title from "@/components/Title";
import CardFilm from "@/components/CardFilm";

async function carregarFilmes() {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error("TMDB_API_KEY não definida. Adicione em .env.local");
  }
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`;
  const resposta = await fetch(url);
  const json = await resposta.json();
  return json.results;
}

export default async function Home() {
  const filmes = await carregarFilmes();

  return (
    <>
      <NavBar />
      <main className="p-2">
        <Title>Filmes em Alta</Title>
        <section className="flex flex-wrap gap-5">
          {filmes.map((filme) => (
            <CardFilm filme={filme} />
          ))}
        </section>
      </main>
    </>
  );
}
