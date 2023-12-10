import { createTheme } from "@mui/material";
import palette from "./palette";
import components from "./component";
import typography from "./typography";

const defaultTheme = createTheme();

export const theme = createTheme({
    ...defaultTheme,
    palette,
    typography,
    components
});
