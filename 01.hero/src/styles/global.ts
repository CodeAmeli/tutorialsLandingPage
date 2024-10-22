import { createGlobalStyle } from "styled-components";
import Bkg1 from "../assets/background-1.svg";
import Bkg2 from "../assets/background-2.svg";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background-color: #F8FDFF;
        font-family: "Poppins", sans-serif;
        background: url(${Bkg2}) no-repeat 1010px, url(${Bkg1}) no-repeat 931px;
        background-size: cover;
    }

    button{
        background-color: transparent;
        font-family: "Poppins", sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        outline: none;
    }
`

export default GlobalStyle;