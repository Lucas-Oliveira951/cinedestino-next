import { filmes, filmesCategoria } from "@/app/data/filmes";
import { notFound } from "next/navigation";

/* Unificando todos os filmes */
const todosFilmes = [...filmes, ...filmesCategoria];

export function generateStaticParams() {
  return todosFilmes.map((filme) => ({
    slug: filme.slug,
  }));
}

//Gerador de metadados dinâmicos
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const filme = todosFilmes.find((f) => f.slug === slug);

  if (!filme) {
    return {
      title: "Filme não encontrado",
    };
  }

  return {
    title: filme.titulo,
    description: filme.descricao,
  };
}

export default async function FilmePage({ params }) {
  const { slug } = await params;

  const filme = todosFilmes.find((f) => f.slug === slug);

  if (!filme) {
    notFound();
  }

  return (
    <main
      className="background-filme"
      style={{
        backgroundImage: `url("${filme.background}")`,
      }}
    >
      <div className="container-poster">
        <div className="poster">
          <img
            className="poster-imagem"
            src={filme.imagem}
            alt={filme.titulo}
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">{filme.titulo}</h1>
          <span>{filme.duracaoCategoria}</span>
          <div className="nota-filme">
            <p>
              <i className="fa-solid fa-star"></i> {filme.nota}
            </p>
          </div>
          <p className="sinopse">{filme.descricao}</p>

          <div className="buttons">
            <a href="#" className="button-trailer">
              Ver Trailer
            </a>
            <a href="#" className="button-quiz">
              Ver Agora
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
