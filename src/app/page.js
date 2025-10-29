import NavBar from "@/components/NavBar";
import Title from "@/components/Title";
import CardFilm from "@/components/CardFilm";

const filmes = [
  {
    titulo: "A Namorada Ideal",
    nota: 7.0,
    poster:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/wUu11RqotaShM8s9GfpMChYMG5S.jpg",
  },

  {
    titulo: "SuperMan",
    nota: 8.5,
    poster:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/xeZ8oG6W60fEPf9yCjERUXiHRBF.jpg",
  },

  {
    titulo: "Corra Que A Policia Vem Aí",
    nota: 9,
    poster:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/aGnR0XntfMrlrbnVyPL8XOKAkAQ.jpg",
  },

  {
    titulo: "Jurassic World: Recomeço",
    nota: 7.7,
    poster:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/zuEC2i3I2P7QIcLoUJNBwqRYO4S.jpg",
  },

  {
    titulo: "Ladrões",
    nota: 8.5,
    poster:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/l1ezVQbjxqnoTPMOLLKQmdTNen1.jpg",
  },
];

export default function Home() {
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

        <Title>Séries em Alta</Title>
        <Title>Próximos Lançamentos</Title>
      </main>
    </>
  );
}
