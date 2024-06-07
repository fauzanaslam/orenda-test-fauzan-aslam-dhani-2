import { createTheme, ThemeOptions } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

// Extend the Palette interface
declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      light: string;
      medium: string;
      normal: string;
      main: string;
    };
    green: {
      main: string;
    };
  }
  interface PaletteOptions {
    neutral?: {
      light: string;
      medium: string;
      normal: string;
      main: string;
    };
    green?: {
      main: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: red[50],
    },
    neutral: {
      light: grey[50],
      medium: grey[200],
      normal: grey[700],
      main: grey[900],
    },
    green: {
      main: green[400],
    },
  },
} as ThemeOptions);

export default theme;
