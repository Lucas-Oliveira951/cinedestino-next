export default function HeaderMobileFilme({ fotoPerfil }) {
  return (
    <header className="header-responsivo header-filme-mobile">
      <h1 className="titulo-principal-mobile">Cinedestino</h1>

      <div className="nav-right-mobile">
        <nav className="menu">
          <ul className="nav-list">
            <li>
              <a href="/" className="item-list">
                <i className="fa-solid fa-house"></i>Página inicial
              </a>
            </li>
            <li>
              <a href="/catalogo" className="item-list">
                <i className="fa-solid fa-gears"></i>Catálogo
              </a>
            </li>
            <li>
              <a href="/sobre" className="item-list">
                <i className="fa-solid fa-circle-info"></i>Sobre
              </a>
            </li>
          </ul>
        </nav>

        <div className="pesquisa-responsivo">
          <button className="botao-mobile-pesquisar">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <nav className="menu-lateral">
          <ul>
            <li><a href="/"><i className="fa-solid fa-house"></i> Página Inicial</a></li>
            <li><a href="/catalogo"><i className="fa-solid fa-gears"></i> Catálogo</a></li>
            <li><a href="/sobre"><i className="fa-solid fa-circle-info"></i> Sobre</a></li>
          </ul>
        </nav>

        <img
          src={fotoPerfil}
          className="foto_de_perfil"
          alt="foto de perfil"
        />
      </div>
    </header>
  )
}
