import React from "react";
import "../Header/Header.css";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="container-item">
          <a href="/">
            <h1 className="inicio">Início</h1>
          </a>
          <div class="flex items-center gap-1">
            <a
              href="/search"
              class="px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
            >
              {" "}
              Pesquisar Receitas{" "}
            </a>
            <a
              href="/por-letra"
              class="inline-flex items-center px-2 h-100 transition-colors hover:bg-orange-500 hover:text-white"
            >
              {" "}
              Receitas por Letra{" "}
            </a>
            <a
              href="/ingredientes"
              class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
            >
              {" "}
              Receitas por Ingredientes{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
