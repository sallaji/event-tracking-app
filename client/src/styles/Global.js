import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

:root{
--color-primary-dark: #262931;
--color-primary-dark-hover: #41464c;
--color-yellow: #fbb900;
--color-yellow-hover: rgb(255,213,45);
--color-violet:#7500fb;
--color-violet-hover:#b659ff;
--color-pink: #fb0086;
--color-pink-hover: #fb63b3;
--color-green:#86fb00;
--color-green-hover:#b8ff52;
}

*,
*::after,
*::before {
margin:0px;
padding: 0px;
box-sizing: inherit;
}

html{
font-size: 62.5%;

}
body {
box-sizing: border-box;
font-family: 'Quicksand', sans-serif;
height:100vh;
width: 100vw;
}
`;
export default GlobalStyles;