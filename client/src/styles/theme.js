import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#262931"
        }
      },
      typography: {
        fontFamily: ['Quicksand', 'Roboto'].join(',')
      },

  overrides:{
        MuiAppBar: {
          colorDefault: {
          }
        }
  }
    }
);

export default theme;