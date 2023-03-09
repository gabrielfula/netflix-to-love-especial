import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}


body {
    font-family: 'Archivo';
    background: #141414;
    width: 100vw;
    height: 100vh;
    color: #FAFAFA;
    overflow-x: hidden;
    
}

@media(max-width: 1200px){
        font-size: 95.75%;

        img {
          width: 90%;
        }
    }

    @media(max-width: 720px){
        font-size: 87.75%;

        img {
          width: 100%;
        }

    }
  

img {
    width: auto;
    height: auto;
}


button {
    cursor: pointer;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: #FAFAFA;
}

ul,li {
  list-style: none;
}

`;

export const Theme = {
  colors: {
    primary: "#141414",
    white: "#FAFAFA",
    grey: "#b8b8b8",
    black: "#000",
    transparent: "#000000ca",
  },
};
