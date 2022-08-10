import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#ff8000",
      },
      secondary: {
        main: '#47c7fc',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: '#000',
        paper: '#000',
      },
    },
  });

  const originalDrawerTheme = createTheme({
    palette: {
      primary: {
        main: '#ff8000',
      },
      secondary: {
        main: '#000',
      },
      background: {
        default: '#111111',
        paper: '#000',
      },
      text: {
        primary: '#fff',
      },
      warning: {
        main: '#000',
        light: '#000',
        dark: '#fff000',
      },
      divider: '#fff',
      action: {
        active: "#fff",
        hover: '#ff8000',
        selected: "#000",
        selectedOpacity: 1,
        activatedOpacity: 0.5,
        focusOpacity: 0.5,
      }
    },
  });


  export { darkTheme, originalDrawerTheme }
  export default theme