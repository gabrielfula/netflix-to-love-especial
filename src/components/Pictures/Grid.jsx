import React from "react";
import { Content } from "./styled";

export default function Grid() {
  return (
    <Content id="alta" data-aos="fade-right">
      <h3>Em alta</h3>
      <div>
        <img src="./imagens/principal/year2023.jpeg" alt="ano-2023" />
        <img src="./imagens/principal/03.jpeg" alt="foto-casal-verde" />
        <img src="./imagens/principal/04.jpeg" alt="ensaio-senac" />
        <img src="./imagens/principal/05.jpeg" alt="foto-passeio" />
        <img src="./imagens/principal/06.jpeg" alt="formatura" />
      </div>
    </Content>
  );
}
