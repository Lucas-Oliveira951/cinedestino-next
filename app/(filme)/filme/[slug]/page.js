import { filmes } from "@/app/data/filmes";
import { notFound } from "next/navigation";

// ❌ NÃO precisa async aqui
export function generateStaticParams() {
  return filmes.map((filme) => ({
    slug: filme.slug,
  }));
}

// Metadata seguro
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const filme = filmes.find((f) => f.slug === slug);

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

export default function FilmePage({ params }) {
  const { slug } = await params;
  const filme = filmes.find((f) => f.slug === slug);

  if (!filme) {
    notFound();
  }

  return (
    <main
      className="background-filme"
      // style={{
      //   //backgroundImage: `url(${filme.background})`,
      // }}
    >
      <div className="container-poster">
        <div className="poster">
          <img src={filme.imagem} alt={filme.titulo} />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">{filme.titulo}</h1>
          <span>{filme.duracaoCategoria}</span>
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
