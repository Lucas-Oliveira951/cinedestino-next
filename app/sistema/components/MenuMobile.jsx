"use client";

import { useState } from "react";

export default function MenuMobile() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  function toggleMenu() {
    setMenuAtivo((prev) => !prev);
  }

  function closeMenu() {
    setMenuAtivo(false);
  }

  return (
    <>
      {/* BOTÃO DE MENU */}
      <button
        className={`botao-menu-versao-php ${menuAtivo ? "ativo" : ""}`}
        onClick={toggleMenu}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* MENU LATERAL */}
      <nav className={`menu-lateral ${menuAtivo ? "ativo" : ""}`}>
        <ul>
          <li>
            <a href="/sistema" onClick={closeMenu}>
              <i className="fa-solid fa-house"></i>Página inicial
            </a>
          </li>
          <li>
            <a href="/catalogo" onClick={closeMenu}>
              <i className="fa-solid fa-gears"></i>Catálogo
            </a>
          </li>
          <li>
            <a href="/sobre" onClick={closeMenu}>
              <i className="fa-solid fa-circle-info"></i>Sobre
            </a>
          </li>
          <li>
            <a href="/api/auth/logout">
              <i className="fa-solid fa-right-from-bracket"></i>Sair
            </a>
          </li>
        </ul>
      </nav>

      {/* FUNDO ESCURECIDO */}
      <div
        className={`background ${menuAtivo ? "ativo" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
}
