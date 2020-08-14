import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#262931",
          dark: "#0a0a0e",
          light: "#667286",
          contrastText: "white"
        },
        yellow: {
          main: "#FDB916",
          dark: "#d69a15",
          light: "#fde22a",
          contrastText: "#262931",
        }
      },
      typography: {
        fontFamily: ['Quicksand', 'Roboto'].join(',')
      },

      overrides: {
        MuiAppBar: {
          colorDefault: {
            // backgroundColor: '#000'
          }
        }
      }
    }
);

export default theme;