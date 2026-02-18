import HeaderMobileFilme from "./HeaderMobileFilme";
import MenuMobile from "./MenuMobile";

export default function Header({
  fotoPerfil = null,
  showSearch = false,
  variant = "home",
}) {
  const hasUser = !!fotoPerfil;

  return (
    <header className={`header header-${variant}`}>
      {/* LOGO */}
      <h1 className="titulo-principal-desktop">Cinedestino</h1>

      {/* ===== HOME (LOGADO) ===== */}
      {variant === "home" && (
        <nav className="menu-home">
          <a href="/sistema" className="menu-item">
            <i className="fa-solid fa-house"></i>Página inicial
          </a>

          <a href="/sistema/catalogo" className="menu-item">
            <i className="fa-solid fa-gears"></i>Catálogo
          </a>

          <a href="/sistema/sobre" className="menu-item">
            <i className="fa-solid fa-circle-info"></i>Sobre
          </a>

          <a href="/api/auth/logout" className="menu-item">
            <i className="fa-solid fa-right-from-bracket"></i>Sair
          </a>

          {hasUser && (
            <div className="user-slot">
              <img
                src={fotoPerfil}
                className="foto_de_perfil"
                alt="foto de perfil"
              />
            </div>
          )}
        </nav>
      )}

      {/* ===== PÚBLICO (SEM FOTO) ===== */}
      {variant === "public" && (
        <nav className="menu-home">
          <a href="/" className="menu-item">
            <i className="fa-solid fa-house"></i>Página Inicial
          </a>

          <a href="/catalogo" className="menu-item">
            <i className="fa-solid fa-gears"></i>Catálogo
          </a>

          <a href="/sobre" className="menu-item">
            <i className="fa-solid fa-circle-info"></i>Sobre
          </a>

          <a href="/login" className="botao-login">
            Entrar
          </a>
        </nav>
      )}

      {/* ===== FILME (LOGADO) ===== */}
      {variant === "filme" && (
        <>
          <nav className="menu-filme">
            <div className="nav-left">
              <a href="/sistema" className="menu-item">
                <i className="fa-solid fa-house"></i>Página inicial
              </a>

              <a href="/sistema/catalogo" className="menu-item">
                <i className="fa-solid fa-gears"></i>Catálogo
              </a>
            </div>

            {showSearch && (
              <div className="nav-center">
                <form className="pesquisa-form">
                  <input type="search" id="Pesquisar" placeholder="Pesquisar" />
                  <button className="pesquisar-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            )}

            <div className="nav-right">
              <div className="pesquisa-responsivo">
                <button className="botao-mobile-pesquisar">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <a href="sistema/sobre" className="menu-item">
                <i className="fa-solid fa-circle-info"></i>Sobre
              </a>

              {hasUser && (
                <div className="user-slot">
                  <img
                    src={fotoPerfil}
                    className="foto_de_perfil"
                    alt="foto de perfil"
                  />
                </div>
              )}
            </div>
          </nav>

          {hasUser && <HeaderMobileFilme fotoPerfil={fotoPerfil} />}
        </>
      )}

      {/* ===== FILME PÚBLICO (SEM FOTO) ===== */}
      {variant === "filme-public" && (
        <>
          <nav className="menu-filme">
            <div className="nav-left">
              <a href="/" className="menu-item">
                <i className="fa-solid fa-house"></i>Página inicial
              </a>

              <a href="/catalogo" className="menu-item">
                <i className="fa-solid fa-gears"></i>Catálogo
              </a>
            </div>

            {showSearch && (
              <div className="nav-center">
                <form className="pesquisa-form">
                  <input id="Pesquisar" type="search" placeholder="Pesquisar" />
                  <button className="pesquisar-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            )}

            <div className="nav-right">
              <div className="pesquisa-responsivo">
                <button className="botao-mobile-pesquisar">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <a href="/sobre" className="menu-item">
                <i className="fa-solid fa-circle-info"></i>Sobre
              </a>

              <a href="/login" className="botao-login">
                Entrar
              </a>
            </div>
          </nav>

          <HeaderMobileFilme variant="public" />
        </>
      )}

      <MenuMobile
        variant={
          variant === "public" || variant === "filme-public"
            ? "public"
            : "private"
        }
      />
    </header>
  );
}
