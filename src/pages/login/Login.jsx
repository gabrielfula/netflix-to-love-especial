import React from "react";
import { ContentLogin, Perfil } from "./Styled";

export default function Login() {
  return (
    <ContentLogin>
      <h1>Quem está assistindo ?</h1>
      <Perfil href="/">
        <img src="./imagens/perfil/perfilImage.jpeg" alt="Foto-casal" />
      </Perfil>
      <p>Ana Fulaneto</p>
    </ContentLogin>
  );
}
