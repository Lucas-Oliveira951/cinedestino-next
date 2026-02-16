import { filmes } from "@/app/data/filmes";

export async function generateStaticParams() {
  return filmes.map((filme) => ({
    slug: filme.slug,
  }));
}

export default async function FilmePage({ params }) {
  const { slug } = await params;

  const filme = filmes.find((f) => f.slug === slug);

  if (!filme) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <main 
      className="background-filme"
      style={{backgroundImage: `url("${filme.background}")`,}}
    >
      <div className="container-poster">

        <div className="poster">
          <img
            src={filme.imagem}
            alt={filme.titulo}
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">{filme.titulo}</h1>

          <span>{filme.duracaoCategoria}</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> {filme.nota}</p>
          </div>

          <p className="sinopse">{filme.descricao}</p>

          <div className="buttons">
            <a href="#" className="button-trailer">Ver Trailer</a>
            <a href="#" className="button-quiz">Ver Agora</a>
          </div>
        </div>

      </div>
    </main>
  );
}
