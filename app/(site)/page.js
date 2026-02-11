import Link from "next/link";
// import "./assets/css/style.css";

export default function Home() {
  return (
    <>
      <header>
        <nav className="menu">
          <h1 className="titulo-principal">Cinedestino</h1>
          <ul className="nav-list">
            <li>
              <Link href="/" className="item-list">
                Página inicial
              </Link>
            </li>
            <li>
              <Link href="/catalogo" className="item-list">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="item-list">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/login" className="botao-login">
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="background"></div>

      <main className="conteudo">
        <div className="apresentacao">
          <h1>Melhores Filmes Católicos para</h1>
          <h3>Assistir com a sua família</h3>

          <div className="barra-de-pesquisa">
            <div className="barra-input">
              <input type="search" placeholder="Pesquisar" />
            </div>
            <input type="button" value="Pesquisar" />
          </div>
        </div>

        <section className="secao-filmes">
          <h1 className="secao-title">Lançamento</h1>

          <div className="filmes">

            <div className="filme-card">
              <div className="poster">
                <Link href="/filmes/caminho-da-luz">
                  <img
                    src="/assets/Image/Caminho da Luz.jpg"
                    alt="Caminho da Luz"
                  />
                </Link>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">Caminho da Luz</h1>
                <span className="filme-ano">2025</span>
              </div>
            </div>

            <div className="filme-card">
              <div className="poster">
                <Link href="/filmes/o-milagre-em-roma">
                  <img
                    src="/assets/Image/O Milagre em Roma.jpg"
                    alt="O Milagre em Roma"
                  />
                </Link>
              </div>
              <div className="filme-descricao">
                <h1 className="filme-title">O Milagre em Roma</h1>
                <span className="filme-ano">2025</span>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
