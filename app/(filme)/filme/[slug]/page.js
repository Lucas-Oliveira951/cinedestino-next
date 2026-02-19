import { filmes } from "@/app/data/filmes";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return filmes.map((filme) => ({
    slug: filme.slug,
  }));
}

export function generateMetadata({ params }) {
  const filme = filmes.find((f) => f.slug === params.slug);

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
  console.log("FILMES:", filmes);
  console.log("PARAMS:", params);

  const filme = filmes.find((f) => f.slug === params.slug);

  if (!filme) {
    notFound();
  }

  return (
    <main>
      <h1>{filme.titulo}</h1>
    </main>
  );
}
