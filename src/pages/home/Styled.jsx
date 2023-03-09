import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-blend-mode: darken;
  background: rgba(3, 0, 12, 0.7)
    url(./imagens/principal/aniversarioprimeiro.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;

  div {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    position: absolute;
    z-index: 99;
    top: 25rem;
    left: 2rem;

    h3 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  border-radius: 5px;
  width: 130px;
  height: 35px;

  :hover {
    background: ${({ theme }) => theme.colors.grey};
    transition: 0.3s;
  }
`;
