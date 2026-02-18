"use client";
import Link from "next/link";
import { useState } from "react";
import { filmes } from "@/app/data/filmes";

const filmeLuz = filmes.find((f) => f.slug === "Caminho-da-Luz");

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

const ordemLancamentos = [
  "luz-em-meu-caminho",
  "a-ultima-capela",
  "lagrimas-de-esperanca",
  "chama-do-perdao",
];

const filmesLancamentos = ordemLancamentos
  .map((slug) => filmes.find((f) => f.slug === slug))
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

  const filmesDaCategoria = filmes.filter(
    (filme) => filme.categoria === categoriaKey,
  );

  return (
    <main className="conteudo">
      <div className="container-catalogo">
        {/* CARD CAMINHO DA LUZ */}
        <div className="card card-luz">
          <div className="card-imagem"></div>

          <div className="card-conteudo">
            <h2>{filmeLuz.titulo}</h2>

            <p className="lancamento">Lançamento: {filmeLuz.lancamento}</p>

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

            <p className="lancamento">Lançamento: {filmeRoma.lancamento}</p>

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
                  <Link href={`/filme/${filme.slug}`} className="btn-info-3">
                    Mais info
                  </Link>

                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* FOOTER Desktop versão */}

      <footer className="informacoes">
        <div className="informacoes-container">
          <div className="info-title">Conecte-se conosco</div>
          <div className="rede-sociais">
            <a href="#redes-sociais-mobile" className="icon insta">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#redes-sociais-mobile" className="icon face">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#redes-sociais-mobile" className="icon twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#redes-sociais-mobile" className="icon mail">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="info-link">
            <div className="info-coluna1">
              <a href="#info-coluna">Empregos</a>
              <a href="#info-coluna">Cookies e Preferências</a>
              <a href="#info-coluna">Central de Ajuda</a>
              <a href="#info-coluna">Termos de Uso</a>
              <a href="#info-coluna">Privacidade</a>
            </div>
            <div className="info-coluna">
              <a href="#info-coluna">Notícias</a>
              <a href="#info-coluna">Centro de mídia</a>
              <a href="#info-coluna">Aviso Legal</a>
              <a href="#info-coluna">Realização dos Investidores</a>
              <a href="#info-coluna">Feeds</a>
            </div>
            <div className="info-coluna">
              <a href="#info-coluna">Home</a>
              <a href="#info-coluna">Popular filmes</a>
              <a href="#info-coluna">Trending filmes</a>
              <a href="#info-coluna">Latest filmes</a>
              <a href="#info-coluna">About us</a>
            </div>
          </div>
          <p>&copy;Raphael Antônio & Lucas Batista</p>
          <p>Criado por Raphael Antônio & Lucas Batista</p>
        </div>
      </footer>

      {/* FOOTER TABLET */}

      <footer className="informacoes-tablet">
        <div className="informacoes-container-tablet">
          {/* COLUNA 1  */}
          <div className="rede-sociais-mobile-container">
            <div className="info-title-tablet">Conecte-se conosco</div>

            <div className="rede-sociais-tablet">
              <a href="#rede-sociais-mobile" className="icon insta">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="#rede-sociais-mobile" className="icon face">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#rede-sociais-mobile" className="icon twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#rede-sociais-mobile" className="icon mail">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>

            <ul>
              <li className="services">
                <a href="#services">Home</a>
              </li>
              <li className="services">
                <a href="#services">Popular filmes</a>
              </li>
              <li className="services">
                <a href="#services">Trending filmes</a>
              </li>
              <li className="services">
                <a href="#services">Latest filmes</a>
              </li>
              <li className="services">
                <a href="#services">About us</a>
              </li>
            </ul>
          </div>

          {/* COLUNA 2  */}
          <div className="footer-col">
            <ul>
              <li>
                <a href="#footer-col">Empregos</a>
              </li>
              <li>
                <a href="#footer-col">Cookies & Preferências</a>
              </li>
              <li>
                <a href="#footer-col">Central de Ajuda</a>
              </li>
              <li>
                <a href="#footer-col">Termos de Uso</a>
              </li>
              <li>
                <a href="#footer-col">Privacidade</a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 */}
          <div className="footer-col">
            <ul>
              <li>
                <a href="#footer-col">Notícias</a>
              </li>
              <li>
                <a href="#footer-col">Centro de mídia</a>
              </li>
              <li>
                <a href="#footer-col">Aviso Legal</a>
              </li>
              <li>
                <a href="#footer-col">Investidores</a>
              </li>
              <li>
                <a href="#footer-col">Feeds</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy;Raphael Antônio & Lucas Batista</p>
          <p>Criado por Raphael Antônio & Lucas Batista</p>
        </div>
      </footer>

      {/* FOOTER MOBILE */}

      <footer className="footer-mobile">
        <div className="info-social-mobile">
          <div className="info-title-mobile">Conecte-se conosco</div>

          <div className="info-rede-mobile">
            <a href="#footer-icons-mobile" className="icon insta">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#footer-icons-mobile" className="icon face">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#footer-icons-mobile" className="icon twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#footer-icons-mobile" className="icon mail">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          {/* COLUNA 1 */}
          <ul className="coluna-vertical">
            <li>
              <a href="#coluna-vertical">Empregos</a>
            </li>
            <li>
              <a href="#coluna-vertical">Cookies e Preferências</a>
            </li>
            <li>
              <a href="#coluna-vertical">Central de Ajuda</a>
            </li>
            <li>
              <a href="#coluna-vertical">Termos de Uso</a>
            </li>
            <li>
              <a href="#coluna-vertical">Privacidade</a>
            </li>
          </ul>

          {/* COLUNA 2 */}
          <ul className="coluna-vertical">
            <li>
              <a href="#coluna-vertical">Notícias</a>
            </li>
            <li>
              <a href="#coluna-vertical">Centro de mídia</a>
            </li>
            <li>
              <a href="#coluna-vertical">Aviso Legal</a>
            </li>
            <li>
              <a href="#coluna-vertical">Realização dos Investidores</a>
            </li>
            <li>
              <a href="#coluna-vertical">Feeds</a>
            </li>
          </ul>

          {/* COLUNA 3 (HORIZONTAL) */}
          <ul className="coluna-horizontal">
            <li>
              <a href="#coluna-horizontal">Home</a>
            </li>
            <li>
              <a href="#coluna-horizontal">Popular filmes</a>
            </li>
            <li>
              <a href="#coluna-horizontal">Trending filmes</a>
            </li>
            <li>
              <a href="#coluna-horizontal">Latest filmes</a>
            </li>
            <li>
              <a href="#coluna-horizontal">About us</a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          <p>&copy;Raphael Antônio & Lucas Batista</p>
          <p>Criado por Raphael Antônio & Lucas Batista</p>
        </div>
      </footer>
    </main>
  );
}
