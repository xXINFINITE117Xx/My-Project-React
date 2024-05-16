import React from "react";
import { Navbar } from "./Layouts/Navbar/Navbar";
import { ItemNavbar } from "./UI/ItemNavbar/ItemNavbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-24 bg-blue-500">
      <Navbar>
        <ItemNavbar style_a="w-8 text-white text-2x1 font-bold bg-sky-600" content="Inicio" />
        <ItemNavbar style_a="w-32 text-white text-2x1 font-bold bg-sky-600" content="Acerca De Mi" />
        <ItemNavbar style_a="w-max text-white text-2x1 font-bold bg-sky-600" content="Portafolio" />
        <ItemNavbar style_a="w-max text-white text-2x1 font-bold bg-sky-600" content="Contact Me" />
      </Navbar>
    </header>
  );
};
