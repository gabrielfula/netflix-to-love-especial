import React, { useState } from "react";
import { Hamburguer, LeftNavbar, Nav, RightNavbar } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";

export default function Navbar() {
  const [show, setShow] = useState();

  const HandleClick = () => {
    setShow(!show);
  };

  return (
    <Nav>
      <section>
        <img href="/" src="./imagens/principal/logo.png" alt="Logo-Netflix" />
        <LeftNavbar show={show}>
          <a href="/">Home</a>
          <a href="#alta">Em Alta</a>
          <a href="#viagens">Viagens</a>
          <a href="#family">Família</a>
          <a href="/login">Perfil</a>
        </LeftNavbar>
        <RightNavbar show={show}>
          <AiOutlineSearch size={20} />
          <a href="/infantil">Infantil</a>
          <MdOutlineNotifications size={20} />
          <img src="./imagens/perfil/perfilImage.jpeg" alt="Foto-casal" />
        </RightNavbar>
        <Hamburguer onClick={HandleClick}>
          <div onClick={HandleClick}></div>
          <div onClick={HandleClick}></div>
          <div onClick={HandleClick}></div>
        </Hamburguer>
      </section>
    </Nav>
  );
}
