import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {

    fontFamily: "inherit"
  }
})

export default theme;