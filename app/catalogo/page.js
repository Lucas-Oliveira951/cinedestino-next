"use client";
import Link from "next/link";
import { useState } from "react";
import { filmes, filmesCategoria } from "@/app/data/filmes";

const filmeLuz = filmes.find((f) => f.slug === "caminho-da-luz");
const filmeRoma = filmes.find((f) => f.slug === "o-milagre-em-roma");

const ordemPopulares = [
  "as-pegadas-de-pedro",
  "sob-o-manto-da-virgem",
  "entre-rosarios-e-estrelas",
  "o-silencio-do-mosteiro",
];

const filmesPopulares = ordemPopulares
  .map((slug) => filmes.find((f) => f.slug === slug))
  .filter(Boolean);

/* Unificando todos os filmes */
const todosFilmes = [...filmes, ...filmesCategoria];

const ordemLancamentos = [
  "luz-em-meu-caminho",
  "a-ultima-capela",
  "lagrimas-de-esperanca",
  "chama-do-perdao",
];

const filmesLancamentos = ordemLancamentos
  .map((slug) => todosFilmes.find((f) => f.slug === slug))
  .filter(Boolean);

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

  /* ✅ CORREÇÃO AQUI */
  const filmesDaCategoria = filmesCategoria.filter(
    (filme) => filme.categoria === categoriaKey
  );

  return (
    <main className="conteudo-catalogo">
      <div className="container-catalogo">
        {/* CARD CAMINHO DA LUZ */}
        <div className="card card-luz">
          <div className="card-imagem"></div>

          <div className="card-conteudo">
            <h2>{filmeLuz.titulo}</h2>
            <p className="lancamento">
              Lançamento: {filmeLuz.lancamento}
            </p>
            <p className="sinopse">{filmeLuz.descricao}</p>

            <div className="card-acoes">
              <Link href={`/filme/${filmeLuz.slug}`} className="btn-info">
                Mais info
              </Link>
              <span className="btn-favorito">
                <i className="fa-regular fa-heart"></i>
              </span>
            </div>
          </div>
        </div>

        {/* CARD ROMA */}
        <div className="card card-roma">
          <div className="card-imagem"></div>

          <div className="card-conteudo">
            <h2>{filmeRoma.titulo}</h2>
            <p className="lancamento">
              Lançamento: {filmeRoma.lancamento}
            </p>
            <p className="sinopse">{filmeRoma.descricao}</p>

            <div className="card-acoes">
              <Link href={`/filme/${filmeRoma.slug}`} className="btn-info">
                Mais info
              </Link>
              <span className="btn-favorito">
                <i className="fa-regular fa-heart"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FILMES POPULARES */}
      <section className="filmes-populares">
        <h1 className="title-filme">Filmes populares</h1>

        <article className="filmes">
          {filmesPopulares.map((filme) => (
            <div className="card-movie" key={filme.slug}>
              <img src={filme.imagem} alt={filme.titulo} />

              <div className="card-hover">
                <h3>{filme.titulo}</h3>
                <span>{filme.ano}</span>

                <div className="card-btn">
                  <Link href={`/filme/${filme.slug}`} className="btn-info-2">
                    Mais info
                  </Link>
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* PESQUISA POR CATEGORIA */}
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
                      <Link
                        href={`/filme/${filme.slug}`}
                        className="btn-info-movie"
                      >
                        Mais info
                      </Link>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
              ))}
            </aside>
          </article>
        </div>
      </section>

      {/* LANÇAMENTOS */}
      <section className="container-lacamento">
        <h1 className="title-lancamento">Lançamentos</h1>

        <article className="lacamento">
          {filmesLancamentos.map((filme) => (
            <div className="card-lacamento" key={filme.slug}>
              <span className="marcacao">Novo</span>

              <img src={filme.imagem} alt={filme.titulo} />

              <div className="lacamento-hover">
                <h3>{filme.titulo}</h3>
                <span className="ano-movie">{filme.ano}</span>

                <div className="lacamento-btn">
                  <Link
                    href={`/filme/${filme.slug}`}
                    className="btn-info-3"
                  >
                    Mais info
                  </Link>
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}