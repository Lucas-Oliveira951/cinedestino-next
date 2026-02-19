"use client";
import { useState } from "react";

const CATEGORIAS = {
  inspiracao: {
    titulo: "Inspiração",
    descricao:
      "Filmes que tocam o coração e mostram como a fé, o amor e a esperança podem transformar vidas.<br/>Histórias que inspiram o público a acreditar no bem e recomeçar com coragem.",
    filmes: [
      {
        titulo: "Luz em Meu Caminho",
        img: "/catalogo/Luz em Meu Caminho.png",
        link: "/sistema/filmes/categorias/inspiracao/Luz-em-Meu-Caminho",
      },
      {
        titulo: "Vento da Graça",
        img: "/catalogo/Vento da Graça.png",
        link: "/sistema/filmes/categorias/inspiracao/Vento-da-Graca",
      },
      {
        titulo: "Corações que Curam",
        img: "/catalogo/Corações que Curam.png",
        link: "/sistema/filmes/categorias/inspiracao/Coracoes-que-Curam",
      },
      {
        titulo: "A Luz do Perdão",
        img: "/catalogo/A Luz do Perdão.png",
        link: "/sistema/filmes/categorias/inspiracao/A-Luz-do-Perdao",
      },
    ],
  },

  historico: {
    titulo: "Histórico",
    descricao:
      "Obras que retratam momentos marcantes da história da Igreja e da humanidade, mostrando personagens e eventos que revelam o poder da fé ao longo dos séculos.",
    filmes: [
      {
        titulo: "A Cruz do Império",
        img: "/catalogo/A Cruz do império.png",
        link: "/sistema/filmes/categorias/historico/A-Cruz-do-Imperio",
      },
      {
        titulo: "O Manuscrito de Antioquia",
        img: "/catalogo/O Manuscrito de Antioquia.png",
        link: "/sistema/filmes/categorias/historico/O-Manuscrito-de-Antioquia",
      },
      {
        titulo: "Os Guardiões do Santuário",
        img: "/catalogo/Os Guardiões do Santuário.png",
        link: "/sistema/filmes/categorias/historico/Os-Guardioes-do-Santuario",
      },
      {
        titulo: "A Jornada de Helena",
        img: "/catalogo/A Jornada de Helena.png",
        link: "/sistema/filmes/categorias/historico/A-Jornada-de-Helena",
      },
    ],
  },

  drama: {
    titulo: "Drama",
    descricao:
      "Narrativas emocionantes sobre desafios, perdas e reencontros, onde os personagens encontram sentido e consolo através da fé e do perdão.",
    filmes: [
      {
        titulo: "O Peso do Silêncio",
        img: "/catalogo/O Peso do Silêncio.png",
        link: "/sistema/filmes/categorias/drama/O-Peso-do-Silencio",
      },
      {
        titulo: "Caminho de Lágrimas",
        img: "/catalogo/Caminho de Lágrimas.png",
        link: "/sistema/filmes/categorias/drama/Caminho-de-Lagrimas",
      },
      {
        titulo: "Promessa Quebrada",
        img: "/catalogo/Promessa Quebrada.png",
        link: "/sistema/filmes/categorias/drama/Promessa-Quebrada",
      },
      {
        titulo: "Entre a Dor e a Graça",
        img: "/catalogo/Entre a Dor e a Graça.png",
        link: "/sistema/filmes/categorias/drama/Entre-a-Dor-e-a-Graca",
      },
    ],
  },

  superacao: {
    titulo: "Superação",
    descricao:
      "Histórias de força interior, coragem e fé diante das dificuldades.<br>" +
      "Filmes que mostram que, com Deus, nenhuma dor é em vão e todo obstáculo pode ser vencido.",
    filmes: [
      {
        titulo: "Chamas da Determinação",
        img: "/catalogo/Chamas de Determinação.png",
        link: "/sistema/filmes/categorias/superacao/Chamas-da-Determinacao",
      },
      {
        titulo: "Além do Medo",
        img: "/catalogo/Além do Medo.png",
        link: "/sistema/filmes/categorias/superacao/Alem-do-Medo",
      },
      {
        titulo: "Um Novo Amanhã",
        img: "/catalogo/Um Novo amanhã.png",
        link: "/sistema/filmes/categorias/superacao/Um-Novo-Amanha",
      },
      {
        titulo: "O Valor de Recomeçar",
        img: "/catalogo/O Valor de Recomeçar.png",
        link: "/sistema/filmes/categorias/superacao/O-Valor-de-Recomecar",
      },
    ],
  },

  religioso: {
    titulo: "Religioso",
    descricao:
      "Filmes voltados à espiritualidade, devoção e aos ensinamentos cristãos.<br>" +
      "Retratam a presença divina no cotidiano e o poder da oração em transformar corações.",
    filmes: [
      {
        titulo: "No Coração da Oração",
        img: "/catalogo/No Coração da Oração.png",
        link: "/sistema/filmes/categorias/religioso/No-Coracao-da-Oracao",
      },
      {
        titulo: "Milagre no Deserto",
        img: "/catalogo/Milagre no Deserto.png",
        link: "/sistema/filmes/categorias/religioso/Milagre-no-Deserto",
      },
      {
        titulo: "Oração de Fátima",
        img: "/catalogo/Oração de Fátima.png",
        link: "/sistema/filmes/categorias/religioso/Oracao-de-Fatima",
      },
      {
        titulo: "O Canto dos Anjos",
        img: "/catalogo/O Canto dos Anjos.png",
        link: "/sistema/filmes/categorias/religioso/O-Canto-dos-Anjos",
      },
    ],
  },

  aventura: {
    titulo: "Aventura",
    descricao:
      "Tramas cheias de movimento e descobertas, onde os protagonistas enfrentam desafios físicos e espirituais em jornadas que testam sua fé e determinação.",
    filmes: [
      {
        titulo: "Nas Trilhas da Fé",
        img: "/catalogo/Nas Trilhas da Fé.png",
        link: "/sistema/filmes/categorias/aventura/Nas-Trilhas-da-Fe",
      },
      {
        titulo: "A Ilha da Cruz Perdida",
        img: "/catalogo/A Ilha da Cruz Perdida.png",
        link: "/sistema/filmes/categorias/aventura/A-Ilha-da-Cruz-Perdida",
      },
      {
        titulo: "Rumo ao Santuário",
        img: "/catalogo/Rum ao Santuário.png",
        link: "/sistema/filmes/categorias/aventura/Rumo-ao-Santuario",
      },
      {
        titulo: "Guardião do Caminho",
        img: "/catalogo/Guardião do Caminho.png",
        link: "/sistema/filmes/categorias/aventura/Guardiao-do-Caminho",
      },
    ],
  },
};

export default function CatalogoPage() {
  const [categoria, setCategoria] = useState(CATEGORIAS.inspiracao);
  return (
    <main className="conteudo">
      <div className="container-catalogo">
        {/* CARD PRINCIPAL */}
        <div className="card card-luz">
          <div className="card-imagem"></div>

          <div className="card-conteudo">
            <h2>Caminho da Luz</h2>
            <p className="lancamento">Lançamento: 21 Outubro 2025</p>
            <p className="sinopse">
              A história de um jovem que encontra força na fé para transformar
              sua comunidade em meio às adversidades.
            </p>

            <div className="card-acoes">
              <a href="/sistema/filmes/Caminho-da-Luz" className="btn-info">
                Mais info
              </a>
              <span className="btn-favorito">
                <i className="fa-regular fa-heart"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card card-roma">
          <div className="card-imagem"></div>

          <div className="card-conteudo">
            <h2>O Milagre em Roma</h2>
            <p className="lancamento">Lançamento: 6 Janeiro, 2024</p>
            <p className="sinopse">
              Durante a Idade Média, uma pequena capela no coração de Roma
              torna-se palco de um milagre.
            </p>

            <div className="card-acoes">
              <a href="/sistema/filmes/o-milagre-em-roma" className="btn-info">
                Mais info
              </a>
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
          {[
            {
              titulo: "As Pegadas de Pedro",
              img: "/assets/Image/As Pegadas de Pedro.jpg",
              link: "/sistema/filmes/as-pegadas-de-pedro",
            },
            {
              titulo: "Sob o Manto da Virgem",
              img: "/assets/Image/Sob o Manto da Virgem.jpg",
              link: "/sistema/filmes/sob-o-manto-da-virgem",
            },
            {
              titulo: "Entre Rosários e Estrelas",
              img: "/assets/Image/Entre Rosários e Estrelas.jpg",
              link: "/sistema/filmes/entre-rosarios-e-estrelas",
            },
            {
              titulo: "O Silêncio do Mosteiro",
              img: "/assets/Image/O Silêncio do Mosteiro.jpg",
              link: "/sistema/filmes/o-silencio-do-mosteiro",
            },
          ].map((filme) => (
            <div className="card-movie" key={filme.titulo}>
              <img src={filme.img} alt={filme.titulo} />

              <div className="card-hover">
                <h3>{filme.titulo}</h3>
                <span>2025</span>

                <div className="card-btn">
                  <a href={filme.link} className="btn-info-2">
                    Mais info
                  </a>
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
              <li
                className="list-item"
                onClick={() => setCategoria(CATEGORIAS.inspiracao)}
              >
                Inspiração
              </li>
              <li
                className="list-item"
                onClick={() => setCategoria(CATEGORIAS.historico)}
              >
                Histórico
              </li>
              <li
                className="list-item"
                onClick={() => setCategoria(CATEGORIAS.drama)}
              >
                Drama
              </li>
              <li
                className="list-item"
                onClick={() => setCategoria(CATEGORIAS.superacao)}
              >
                Superação
              </li>
              <li
                className="list-item"
                onClick={() => setCategoria(CATEGORIAS.religioso)}
              >
                Religioso
              </li>
              <li
                className="list-item"
                onClick={() => setCategoria(CATEGORIAS.aventura)}
              >
                Aventura
              </li>
            </ul>
          </div>

          <article className="card-filmes">
            <h1 className="movie-title">{categoria.titulo}</h1>

            <p
              className="desc-movie"
              dangerouslySetInnerHTML={{ __html: categoria.descricao }}
            />

            <aside className="movie">
              {categoria.filmes.map((filme, index) => (
                <div className="movie-card" key={index}>
                  <img src={filme.img} alt={filme.titulo} />

                  <div className="movie-hover">
                    <h3>{filme.titulo}</h3>
                    <span>2025</span>

                    <div className="movie-btn">
                      <a href={filme.link} className="btn-info-movie">
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
          {[
            {
              titulo: "Luz em Meu Caminho",
              pasta: "Luz-em-Meu-Caminho",
              categoria: "inspiracao",
            },
            {
              titulo: "A Última Capela",
              pasta: "a-ultima-capela",
            },
            {
              titulo: "Lágrimas de Esperança",
              pasta: "lagrimas-de-esperanca",
            },
            {
              titulo: "Chama do Perdão",
              pasta: "chama-do-perdao",
            },
          ].map((filme) => {
            const link = filme.categoria
              ? `/sistema/filmes/categorias/${filme.categoria}/${filme.pasta}`
              : `/sistema/filmes/${filme.pasta}`;

            return (
              <div className="card-lacamento" key={filme.titulo}>
                <span className="marcacao">Novo</span>

                <img src={`/catalogo/${filme.titulo}.png`} alt={filme.titulo} />

                <div className="lacamento-hover">
                  <h3>{filme.titulo}</h3>
                  <span className="ano-movie">2025</span>

                  <div className="lacamento-btn">
                    <a href={link} className="btn-info-3">
                      Mais info
                    </a>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            );
          })}
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
