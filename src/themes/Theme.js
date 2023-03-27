import { createTheme } from "@mui/material/styles";
const globalTypographyStyles = {
  MuiTypography: {
    root: {
      color: '#000000', // set the text color to black
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // deepPurple color
    },
    secondary: {
      main: "#4caf50", // green color
    },
  },
  MuiTypography: {
    root: {
      color: '#000000', // set the text color to black
    },
  },
  // globalTypographyStyles
});

export default theme;
