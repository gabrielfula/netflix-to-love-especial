import styled from "styled-components";

export const Content = styled.div`
  padding: 3rem;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-top: 2rem;
    gap: 3px;

    @media (max-width: 992px) {
      gap: 2rem;
    }


    img {
      width: 200px;
      height: 210px;
      object-fit: cover;
      border-radius: 5px;

      &:hover {
        opacity: 0.5;
        transition: 0.5s;
        scale: 1.2;
      }
    }
  }
`;
