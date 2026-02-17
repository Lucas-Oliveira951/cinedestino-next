import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { pool } from "@/lib/db";

export default async function Sistema() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_login")?.value;

  if (!token) redirect("/login");

  const { rows } = await pool.query(
    `
    SELECT foto_perfil
    FROM usuarios
    WHERE token_login = $1
      AND token_login_expires_at > NOW()
    `,
    [token],
  );

  if (rows.length === 0) {
    redirect("/api/auth/logout");
  }

  const fotoPerfil = rows[0].foto_perfil;

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
            <div className="filme-card">
              <div className="poster">
                <a href="/sistema/filmes/Caminho-da-Luz">
                  <img
                    src="../assets/Image/Caminho da Luz.jpg"
                    alt="Caminho da Luz"
                    title="Caminho da Luz (Criador por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">Caminho da Luz</h1>
                <span className="filme-ano">2025</span>
              </div>
            </div>

            {/* Filme 2  */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/o-milagre-em-roma">
                  <img
                    src="/../assets/Image/O Milagre em Roma.jpg"
                    alt="O Milagre em Roma"
                    title="O Milagre em Roma  (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">O Milagre em Roma</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>

            {/* Filme 3 */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/chama-do-perdao">
                  <img
                    src="/../assets/Image/Chama do Perdão.jpg"
                    alt="Chama do Perdão"
                    title="Chama do Perdão (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">Chama do Perdão</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>

            {/* Filme 4 */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/o-peregrino-de-assis">
                  <img
                    src="/../assets/Image/O Peregrino de Assis.jpg"
                    alt="O Peregrino de Assis"
                    title="O Peregrino de Assis (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">O Peregrino de Assis</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>

            {/* Filme 4 */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/o-silencio-do-mosteiro">
                  <img
                    src="/../assets/Image/O Silêncio do Mosteiro.jpg"
                    alt="O Silêncio do Mosteiro"
                    title="O Silêncio do Mosteiro (Criado por Gemni IA e Chat GPT )"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">O Silêncio do Mosteiro</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>
          </article>
        </section>

        {/* Catálogo Desktop - PARTE 1 (Mudança de cores no background) */}

        <section className="secao-filmes2">
          {/* Filme 1 (background diferente) */}
          <article className="filmes2">
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/lagrimas-de-esperanca">
                  <img
                    src="/../assets/Image/Lágrimas de Esperança.jpg"
                    alt="Lágrimas de Esperança"
                    title="Lágrimas de Esperança (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">Lágrimas de Esperança</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>

            {/* Filme 2 (background diferente) */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/sob-o-manto-da-virgem">
                  <img
                    src="/../assets/Image/Sob o Manto da Virgem.jpg"
                    alt="Sob o Manto da Virgem"
                    title="Sob o Manto da Virgem (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">Sob o Manto da Virgem</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>

            {/* Filme 3 (background diferente) */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/as-pegadas-de-pedro">
                  <img
                    src="/../assets/Image/As Pegadas de Pedro.jpg"
                    alt="As Pegadas de Pedro"
                    title="As Pegadas de Pedro (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">As Pegadas de Pedro</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>

            {/* Filme 4 (background diferente) */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/a-ultima-capela">
                  <img
                    src="/../assets/Image/A Última Capela.jpg"
                    alt="A Última Capela"
                    title="A Última Capela (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">A Última Capela</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>

            {/* Filme 5 (background diferente) */}
            <div className="filme-card">
              <div className="poster">
                <a href="/filmes/entre-rosarios-e-estrelas">
                  <img
                    src="/../assets/Image/Entre Rosários e Estrelas.jpg"
                    alt="Entre Rosários e Estrelas"
                    title="Entre Rosários e Estrelas (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">Entre Rosários e Estrelas</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>
          </article>
        </section>

        {/* Catálogo Versão Tablet */}

        {/* Mobile PARTE 1 */}
        <section className="secao-filmes-mobile">
          <h1 className="secao-title-mobile">Lançamento</h1>
          <article className="filmes-mobile">
            {/* Filme mobile 1 */}
            <div className="filme-card-mobile">
              <div className="poster-mobile">
                <a href="/filmes/Caminho-da-Luz">
                  <img
                    src="/../assets/Image/Caminho da Luz.jpg"
                    alt="Caminho da Luz"
                    title="Caminho da Luz (Criador por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile">
                <h1 className="filme-title-mobile">Caminho da Luz</h1>
                <span className="filme-ano-mobile">2025</span>
              </div>
            </div>

            {/* Filme mobile 2 */}
            <div className="filme-card-mobile">
              <div className="poster-mobile">
                <a href="/filmes/o-milagre-em-roma">
                  <img
                    src="/../assets/Image/O Milagre em Roma.jpg"
                    alt="O Milagre em Roma"
                    title="O Milagre em Roma  (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile">
                <h1 className="filme-title-mobile">O Milagre em Roma</h1>
                <span className="filmes-ano-mobile">2025</span>
              </div>
            </div>

            {/* Filme mobile 3 */}
            <div className="filme-card-mobile">
              <div className="poster-mobile">
                <a href="/filmes/chama-do-perdao">
                  <img
                    src="/../assets/Image/Chama do Perdão.jpg"
                    alt="Chama do Perdão"
                    title="Chama do Perdão (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile">
                <h1 className="filme-title-mobile">Chama do Perdão</h1>
                <span className="filmes-ano-mobile">2025</span>
              </div>
            </div>
          </article>
        </section>

        {/* Mobile PARTE 2 - background diferente */}

        <section className="secao-filmes-mobile2">
          {/* Filme mobile 1 (background diferente - Versão de Mobile) */}

          <article className="filmes-mobile2">
            <div className="filme-card-mobile2">
              <div className="poster-mobile2">
                <a href="/filmes/o-peregrino-de-assis">
                  <img
                    src="/../assets/Image/O Peregrino de Assis.jpg"
                    alt="O Peregrino de Assis"
                    title="O Peregrino de Assis (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile2">
                <h1 className="filme-title-mobile2">O Peregrino de Assis</h1>
                <span className="filme-ano-mobile2">2025</span>
              </div>
            </div>

            {/* Filme mobile 1 (background diferente - Versão de Mobile) */}
            <div className="filme-card-mobile2">
              <div className="poster-mobile2">
                <a href="/filmes/o-silencio-do-mosteiro">
                  <img
                    src="/../assets/Image/O Silêncio do Mosteiro.jpg"
                    alt="O Silêncio do Mosteiro"
                    title="O Silêncio do Mosteiro (Criado por Gemni IA e Chat GPT )"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile2">
                <h1 className="filme-title-mobile2">O Silêncio do Mosteiro</h1>
                <span className="filmes-ano-mobile2">2025</span>
              </div>
            </div>

            {/* Filme mobile 1 (background diferente - Versão de Mobile) */}
            <div className="filme-card-mobile2">
              <div className="poster-mobile2">
                <a href="/filmes/lagrimas-de-esperanca">
                  <img
                    src="/../assets/Image/Lágrimas de Esperança.jpg"
                    alt="Lágrimas de Esperança"
                    title="Lágrimas de Esperança (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile2">
                <h1 className="filme-title-mobile2">Lágrimas de Esperança</h1>
                <span className="filmes-ano-mobile2">2025</span>
              </div>
            </div>
          </article>
        </section>

        {/* Mobile PARTE 3 */}
        <section className="secao-filmes-mobile">
          {/* Terceira coluna de filmes (background diferente - Versão de Mobile) */}
          <article className="filmes-mobile">
            <div className="filme-card-mobile">
              <div className="poster-mobile">
                <a href="/filmes/sob-o-manto-da-virgem">
                  <img
                    src="/../assets/Image/Sob o Manto da Virgem.jpg"
                    alt="Sob o Manto da Virgem"
                    title="Sob o Manto da Virgem (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile">
                <h1 className="filme-title-mobile">Sob o Manto da Virgem</h1>
                <span className="filme-ano-mobile">2025</span>
              </div>
            </div>

            {/* Filme mobile 1 (background diferente - Versão de Mobile) */}
            <div className="filme-card-mobile">
              <div className="poster-mobile">
                <a href="/filmes/as-pegadas-de-pedro">
                  <img
                    src="/../assets/Image/As Pegadas de Pedro.jpg"
                    alt="As Pegadas de Pedro"
                    title="As Pegadas de Pedro (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile">
                <h1 className="filme-title-mobile">As Pegadas de Pedro</h1>
                <span className="filmes-ano-mobile">2025</span>
              </div>
            </div>

            {/* Filme mobile 2 (background diferente - Versão de Mobile) */}
            <div className="filme-card-mobile">
              <div className="poster-mobile">
                <a href="/filmes/a-ultima-capela">
                  <img
                    src="/../assets/Image/A Última Capela.jpg"
                    alt="A Última Capela"
                    title="A Última Capela (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao-mobile">
                <h1 className="filme-title-mobile">A Última Capela</h1>
                <span className="filmes-ano-mobile">2025</span>
              </div>
            </div>
          </article>
        </section>

        {/* Mobile PARTE 4 */}

        <section className="secao-filmes-mobile3">
          <article className="filmes-mobile3">
            <div className="filme-card-mobile3">
              <div className="poster-mobile3 ">
                <a href="/filmes/entre-rosarios-e-estrelas">
                  <img
                    src="/../assets/Image/Entre Rosários e Estrelas.jpg"
                    alt="Entre Rosários e Estrelas"
                    title="Entre Rosários e Estrelas (Criado por Gemni IA e Chat GPT)"
                  />
                </a>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">Entre Rosários e Estrelas</h1>
                <span className="filmes-ano">2025</span>
              </div>
            </div>
          </article>
        </section>

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
