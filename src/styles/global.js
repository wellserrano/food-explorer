import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
  };

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND };
    color: ${ ({theme}) => theme.COLORS.BLUE };

    -webkit-font-smoothing: antialiased;
  };

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    outline: none;
    border: none;
  };

  a {
    text-decoration: none;
  };

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover {
    filter: brightness(0.9);
  };


`;
