import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

:root{
--color-primary-dark: #262931;
--color-primary-light: #4e545a;

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
}
`;
export default GlobalStyles;