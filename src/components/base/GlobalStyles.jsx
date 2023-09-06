import { createGlobalStyle } from "styled-components"
import { inter, darkGrayishBlue } from "../utilities/variables"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 15px;
    font-family: ${inter};
    padding: 0;
    margin: 0;
  }

  body {
    color: ${darkGrayishBlue};
  }

  body, #root {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`