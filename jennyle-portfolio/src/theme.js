import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#0078d7" },
            background: { default: "#fdfdfd", paper: "#fff" },
          }
        : {
            primary: { main: "#339cff" },
            background: { default: "#1a1a1a", paper: "#262626" },
          }),
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
    },
  });
