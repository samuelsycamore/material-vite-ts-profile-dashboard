import { PaletteMode } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: indigo,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: indigo,
          divider: indigo[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: indigo,
          divider: indigo[700],
          background: {
            default: indigo[900],
            paper: indigo[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default theme;
