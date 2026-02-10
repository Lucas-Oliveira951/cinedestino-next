export default function SobrePage() {
  return (
    <main className="conteudo">
      {/* ÁREA SOBRE */}
      <div className="container-sobre">
        <div className="conteudo-container">
          <h1 className="title-sobre">Sobre o Cinedestino</h1>

          <p>
            A Cinedestino é um projeto feito em dupla, Raphael Antônio & Lucas
            Batista, ambos fomos colegas de curso no Instituto Gênesis.
          </p>

          <p>
            Desenvolvido com <strong>HTML, CSS, JavaScript, Next.js</strong> e{" "}
            <strong>PostgreSQL (via Supabase)</strong>, esse é o primeiro projeto que trabalhamos
            juntos para desenvolvê-lo.
          </p>
        </div>

        <div className="image-container">
          <img
            src="/assets/Image/CineDestino.png"
            alt="CineDestino"
            title="Logo do projeto"
          />
        </div>
      </div>

      {/* FORMULÁRIO DE CONTATO */}
      <section className="contato">
        <h2>Entre em contato conosco</h2>

        <form>
          <div className="linha">
            <div className="nome">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Nome" />
            </div>

            <div className="sobrenome">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                type="text"
                id="sobrenome"
                placeholder="Sobrenome"
              />
            </div>
          </div>

          <label htmlFor="email">Endereço de e-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Endereço de e-mail"
          />

          <label htmlFor="mensagem">Sua mensagem</label>
          <textarea
            id="mensagem"
            placeholder="Digite sua pergunta ou mensagem"
          />

          <button type="submit" className="button">
            Enviar
          </button>
        </form>
      </section>

      {/* FOOTER DESKTOP */}
      <footer className="informacoes">
        <div className="informacoes-container">
          <div className="info-title">Conecte-se conosco</div>

          <div className="rede-sociais">
            <a href="#" className="icon insta">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#" className="icon face">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="icon mail">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <div className="info-link">
            <div className="info-coluna1">
              <a href="#">Empregos</a>
              <a href="#">Cookies e Preferências</a>
              <a href="#">Central de Ajuda</a>
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
            </div>

            <div className="info-coluna">
              <a href="#">Notícias</a>
              <a href="#">Centro de mídia</a>
              <a href="#">Aviso Legal</a>
              <a href="#">Realização dos Investidores</a>
              <a href="#">Feeds</a>
            </div>

            <div className="info-coluna">
              <a href="/">Home</a>
              <a href="#">Popular filmes</a>
              <a href="#">Trending filmes</a>
              <a href="#">Latest filmes</a>
              <a href="/sobre">About us</a>
            </div>
          </div>

          <p>&copy; Raphael Antônio & Lucas Batista</p>
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
                        <a href="#rede-sociais-mobile" className="icon insta"><i className="fa-brands fa-square-instagram"></i></a>
                        <a href="#rede-sociais-mobile" className="icon face"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#rede-sociais-mobile" className="icon twitter"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#rede-sociais-mobile" className="icon mail"><i className="fa-solid fa-envelope"></i></a>
                    </div>

                    <ul>
                        <li className="services"><a href="#services">Home</a></li>
                        <li className="services"><a href="#services">Popular filmes</a></li>
                        <li className="services"><a href="#services">Trending filmes</a></li>
                        <li className="services"><a href="#services">Latest filmes</a></li>
                        <li className="services"><a href="#services">About us</a></li>
                    </ul>
                </div>

                {/* COLUNA 2 */}
                <div className="footer-col">
                    <ul>
                        <li><a href="#footer-col">Empregos</a></li>
                        <li><a href="#footer-col">Cookies & Preferências</a></li>
                        <li><a href="#footer-col">Central de Ajuda</a></li>
                        <li><a href="#footer-col">Termos de Uso</a></li>
                        <li><a href="#footer-col">Privacidade</a></li>
                    </ul>
                </div>

                {/* COLUNA 3 */}
                <div className="footer-col">
                    <ul>
                        <li><a href="#footer-col">Notícias</a></li>
                        <li><a href="#footer-col">Centro de mídia</a></li>
                        <li><a href="#footer-col">Aviso Legal</a></li>
                        <li><a href="#footer-col">Investidores</a></li>
                        <li><a href="#footer-col">Feeds</a></li>
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
                    <a href="#footer-icons-mobile" className="icon insta"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="#footer-icons-mobile" className="icon face"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#footer-icons-mobile" className="icon twitter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#footer-icons-mobile" className="icon mail"><i className="fa-solid fa-envelope"></i></a>
                </div>
            </div>

            <div className="footer-links">

                {/* COLUNA 1 */}
                <ul className="coluna-vertical">
                    <li><a href="#coluna-vertical">Empregos</a></li>
                    <li><a href="#coluna-vertical">Cookies e Preferências</a></li>
                    <li><a href="#coluna-vertical">Central de Ajuda</a></li>
                    <li><a href="#coluna-vertical">Termos de Uso</a></li>
                    <li><a href="#coluna-vertical">Privacidade</a></li>
                </ul>

                {/* COLUNA 2 */}
                <ul className="coluna-vertical">
                    <li><a href="#coluna-vertical">Notícias</a></li>
                    <li><a href="#coluna-vertical">Centro de mídia</a></li>
                    <li><a href="#coluna-vertical">Aviso Legal</a></li>
                    <li><a href="#coluna-vertical">Realização dos Investidores</a></li>
                    <li><a href="#coluna-vertical">Feeds</a></li>
                </ul>

                {/* COLUNA 3 (HORIZONTAL) */}
                <ul className="coluna-horizontal">
                    <li><a href="#coluna-horizontal">Home</a></li>
                    <li><a href="#coluna-horizontal">Popular filmes</a></li>
                    <li><a href="#coluna-horizontal">Trending filmes</a></li>
                    <li><a href="#coluna-horizontal">Latest filmes</a></li>
                    <li><a href="#coluna-horizontal">About us</a></li>
                </ul>
            </div>
            <div className="footer-copy">
                <p>&copy;Raphael Antônio & Lucas Batista</p>
                <p>Criado por Raphael Antônio & Lucas Batista</p>
            </div>
        </footer>
    </main>
  )
}
