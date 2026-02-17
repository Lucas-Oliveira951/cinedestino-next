"use client";
import { useState } from "react";
import { filmes } from "@/app/data/filmes";

const CATEGORIAS = {
  inspiracao: {
    titulo: "Inspiração",
    descricao:
      "Filmes que tocam o coração e mostram como a fé, o amor e a esperança podem transformar vidas.<br/>Histórias que inspiram o público a acreditar no bem e recomeçar com coragem.",
  },
  historico: {
    titulo: "Histórico",
    descricao:
      "Obras que retratam momentos marcantes da história da Igreja e da humanidade, mostrando personagens e eventos que revelam o poder da fé ao longo dos séculos.",
  },
  drama: {
    titulo: "Drama",
    descricao:
      "Narrativas emocionantes sobre desafios, perdas e reencontros, onde os personagens encontram sentido e consolo através da fé e do perdão.",
  },
  superacao: {
    titulo: "Superação",
    descricao:
      "Histórias de força interior, coragem e fé diante das dificuldades.<br/>Filmes que mostram que, com Deus, nenhuma dor é em vão e todo obstáculo pode ser vencido.",
  },
  religioso: {
    titulo: "Religioso",
    descricao:
      "Filmes voltados à espiritualidade, devoção e aos ensinamentos cristãos.<br/>Retratam a presença divina no cotidiano e o poder da oração em transformar corações.",
  },
  aventura: {
    titulo: "Aventura",
    descricao:
      "Tramas cheias de movimento e descobertas, onde os protagonistas enfrentam desafios físicos e espirituais em jornadas que testam sua fé e determinação.",
  },
};

export default function CatalogoPage() {
  const [categoriaKey, setCategoriaKey] = useState("inspiracao");

  const categoria = CATEGORIAS[categoriaKey];

  const filmesDaCategoria = filmes.filter(
    (filme) => filme.categoria === categoriaKey
  );

  return (
    <main className="conteudo">
      <section className="container-pesquisa">
        <div className="title-pesquisa">
          <h1>Pesquise filmes por categoria</h1>
        </div>

        <div className="container">
          <div className="list-pesquisa">
            <ul className="list">
              {Object.keys(CATEGORIAS).map((key) => (
                <li
                  key={key}
                  className="list-item"
                  onClick={() => setCategoriaKey(key)}
                >
                  {CATEGORIAS[key].titulo}
                </li>
              ))}
            </ul>
          </div>

          <article className="card-filmes">
            <h1 className="movie-title">{categoria.titulo}</h1>

            <p
              className="desc-movie"
              dangerouslySetInnerHTML={{ __html: categoria.descricao }}
            />

            <aside className="movie">
              {filmesDaCategoria.map((filme) => (
                <div className="movie-card" key={filme.slug}>
                  <img src={filme.imagem} alt={filme.titulo} />

                  <div className="movie-hover">
                    <h3>{filme.titulo}</h3>
                    <span>{filme.ano}</span>

                    <div className="movie-btn">
                      <a
                        href={`/filme/${filme.slug}`}
                        className="btn-info-movie"
                      >
                        Mais info
                      </a>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
              ))}
            </aside>
          </article>
        </div>
      </section>
    </main>
  );
}
