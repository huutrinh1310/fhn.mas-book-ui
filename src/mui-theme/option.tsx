import { ThemeOptions, createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const option: ThemeOptions = {
  ...defaultTheme,
  palette: {
    primary: {
      main: "#f05697",
      contrastText: "#fff",
      dark: "#fa0068",
      light: "#f8f9fa",
    },
    secondary: {
      main: "#898989",
      contrastText: "#fff",
      dark: "#0c131b",
    },
  },
};
