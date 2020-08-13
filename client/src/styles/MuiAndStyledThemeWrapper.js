import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';

const muiStyledGlobalVariables = {
  fontFamily: `'Quicksand', sans-serif;`
};
const GlobalStyles = createGlobalStyle`
//@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

:root{
--color-primary: #262931;
--color-primary-hover: #41464c;
--color-grey: #7a8593;
--color-grey-hover: #9ba5b3;
--color-white: white;
--color-white-hover: #e4e4e4;
--color-yellow: #fbb900;
--color-yellow-hover: rgb(255,213,45);
--color-violet:#7500fb;
--color-violet-hover:#b659ff;
--color-pink: #fb0086;
--color-pink-hover: #fb63b3;
--color-red: #fb105c;
--color-red-hover: #fb6c9b;
--color-green:#86fb00;
--color-green-hover:#b8ff52;
//--color-red: #fbb900;
//--color-red-hover: rgb(255,213,45);
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
height:100vh;
width: 100vw;
font-family: ${muiStyledGlobalVariables.fontFamily}

}
`;

export const myTheme = createMuiTheme({
  palette:{

  },
  typography:{
    fontFamily: muiStyledGlobalVariables.fontFamily,
    // fontSize: 14
  },
  overrides:{
    MuiTypography:{
    },

  MuiInput: {
    root: {
      position: 'relative',
    },
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16,
      },
    },
    /* Styles applied to the root element if the component is focused. */
    focused: {
    },
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:hover:not($disabled):before': {
      },
    },
    /* Styles applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},
    /* Styles applied to the `input` element. */
    input: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},
    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {},
    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {},
  },
  }
});


const MuiAndStyledThemeWrapper = ({children}) => {
  return (
      <StylesProvider injectFirst>

        <MuiThemeProvider theme={myTheme}>

          <ThemeProvider theme={myTheme}>
            {children}

          </ThemeProvider>
          <GlobalStyles/>

        </MuiThemeProvider>

      </StylesProvider>
  );
};
export default MuiAndStyledThemeWrapper;