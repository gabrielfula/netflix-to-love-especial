import styled from "styled-components";

export const ContentLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  gap: 10px;

  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Perfil = styled.a`
  width: auto;
  height: 122px;
  border-radius: 7px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    transition: all 0.5s;
  }

  img {
    width: 90px;
    height: auto;
    border-radius: 7px;
  }
`;
