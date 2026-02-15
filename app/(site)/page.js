import Link from "next/link";
import { filmes } from "@/app/data/filmes";

export default function Home() {
    const primeiraLinha = filmes.slice(0, 5);
    const segundaLinha = filmes.slice(5, 10);

    const grupos = [];

    for(let i = 0; i < filmes.length; i += 3) {
      grupos.push(filmes.slice(i, i + 3));
    }

  return (
    <>
      <main className="conteudo">
        <div className="apresentacao">
          <h1>Melhores Filmes Católicos para</h1>
          <h3>Assistir com a sua família</h3>
          <div className="barra-de-pesquisa">
            <div className="barra-input">
              <input
                type="search"
                name="Pesquisar"
                id="Pesquisar"
                placeholder="Pesquisar"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="button" value="Pesquisar" id="botao-pesquisa" />
          </div>
        </div>

        {/* Catálogo Desktop - Parte 1 */}
        <section className="secao-filmes">
          <h1 className="secao-title">Lançamento</h1>

          {/* Primeira coluna de filmes em exibição */}
          {/* Filme 1  */}
          <article className="filmes">
            {primeiraLinha.map((filme) => (
              <div className="filme-card" key={filme.slug}>
                <div className="poster">
                  <Link href={`/filme/${filme.slug}`}>
                    <img
                      src={filme.imagem}
                      alt={filme.titulo}
                      title="Caminho da Luz (Criador por Gemni IA e Chat GPT)"
                    />
                  </Link>
                </div>
                <div className="filme-descricao">
                  <h1 className="filme-title">{filme.titulo}</h1>
                  <span className="filme-ano">2025</span>
                </div>
              </div>        
            ))}
          </article>
        </section>

        <section className="secao-filmes2">
            <article className="filmes2">
                {segundaLinha.map((filme) => (
                    <div className="filme-card" key={filme.slug}>
                        <div className="poster">
                            <Link href={`/filme/${filme.slug}`}>
                            <img 
                              src={filme.imagem} 
                              alt={filme.titulo} 
                            />
                            </Link>
                        </div>
                        <div className="filme-descricao">
                            <h1 className="filme-title">{filme.titulo}</h1>
                            <span className="filmes-ano">2025</span>
                        </div>
                    </div>
                ))}
            </article>
        </section>

{grupos.map((grupo, index) => (
  <section
    key={index}
    className={`secao-filmes-mobile 
      ${index % 2 !== 0 ? "secao-filmes-mobile2" : ""}
      ${grupo.length === 1 ? "secao-filmes-mobile3" : ""}
    `}
  >
    <h1 className="secao-title-mobile">Lançamento</h1>

    <article
      className={
        grupo.length === 1
          ? "filmes-mobile filmes-mobile3"
          : "filmes-mobile"
      }
    >
      {grupo.map((filme) => (
        <div
          className={
            grupo.length === 1
              ? "filme-card-mobile filme-card-mobile3"
              : "filme-card-mobile"
          }
          key={filme.slug}
        >
          <div className={
            grupo.length === 1
              ? "poster-mobile poster-mobile3"
              : "poster-mobile"
          }>
            <Link href={`/filme/${filme.slug}`}>
              <img
                src={filme.imagem}
                alt={filme.titulo}
              />
            </Link>
          </div>

          <div className={
            grupo.length === 1
              ? "filme-descricao-mobile filme-descricao"
              : "filme-descricao-mobile"
          }>
            <h1 className="filme-title-mobile">
              {filme.titulo}
            </h1>
            <span className="filme-ano-mobile">
              {filme.ano}
            </span>
          </div>
        </div>
      ))}
    </article>
  </section>
))}

        

        {/* FOOTER Desktop versão */}

        <footer className="informacoes">
          <div className="informacoes-container">
            <div className="info-title">Conecte-se conosco</div>
            <div className="rede-sociais">
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
            {/* COLUNA 1 */}
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

            {/* COLUNA 2 */}
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
    </>
  );
}
