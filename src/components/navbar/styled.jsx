import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 0 70px 0 50px;
  background: ${({ theme }) => theme.colors.black};
  gap: 10rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  font-size: 14px;

  img {
    width: 100px;
    height: auto;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const RightNavbar = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }

  img {
    width: 25px;
    height: auto;
    border-radius: 5px;
  }
`;

export const LeftNavbar = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 992px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    position: absolute;
    left: 0;
    top: 7vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.transparent};
    z-index: 1000;
    overflow-y: hidden;
  }

  a {
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
      transition: 0.4s;
    }
  }
`;

export const Hamburguer = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }

  div {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    width: 1.5rem;
    height: 2px;
  }
`;
