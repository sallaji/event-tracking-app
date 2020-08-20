import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import palette from './palette'

let theme = createMuiTheme({

      palette: {
        ...palette,
        background: {
          // paper: "white",
          default: "white"
        },
      },
      typography: {
        fontFamily: ['Quicksand', 'Roboto'].join(','),
      },

      overrides: {
        MuiAppBar: {
          colorDefault: {
            // backgroundColor: '#000'
          }
        },
        MuiInputLabel: { // Name of the component ⚛️ / style sheet
          root: { // Name of the rule
            color: palette.info.dark,
            "&$focused": { // increase the specificity for the pseudo class
              color: palette.info.main
            }
          }
        },
        // MuiInputUnderline:{
        //   color:
        // }
      }
    }
);
theme = responsiveFontSizes(theme);
export default theme;