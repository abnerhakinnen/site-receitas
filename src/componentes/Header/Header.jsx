import React, { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="bg-white shadow h-16 flex justify-between items-center">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <a href="/" className="m-0 font-bold text-orange-500">
          Inicio
        </a>
        <div className="md:flex space-x-4 hidden">
          <a
            href="/search"
            className="hover:text-white hover:bg-orange-500 p-5 transition duration-300"
          >
            Pesquisar Receitas
          </a>
          <a
            href="/por-letra"
            className="hover:text-white hover:bg-orange-500 p-5 transition duration-300"
          >
            Receitas por Letra
          </a>
          <a
            href="/ingredientes"
            className="hover:text-white hover:bg-orange-500 p-5 transition duration-300"
          >
            Receitas por Ingredientes
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {menuVisible && (
            <div className="absolute top-16 right-0 mt-2 bg-orange-500 border border-white rounded-md shadow-md">
              <a
                href="/search"
                className="block text-white py-2 px-4 hover:bg-white hover:text-orange-500"
              >
                Pesquisar Receitas
              </a>
              <a
                href="/por-letra"
                className="block text-white py-2 px-4 hover:bg-white hover:text-orange-500"
              >
                Receitas por Letra
              </a>
              <a
                href="/ingredientes"
                className="block text-white py-2 px-4 hover:bg-white hover:text-orange-500"
              >
                Receitas por Ingredientes
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
