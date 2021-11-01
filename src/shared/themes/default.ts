import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    grayDark: {
      300: "#404674",
      400: "#6e749c",
      500: "#323956",
    },
    greenDark: {
      400: "#5ccb9a",
      500: "#24B374",
    },
  },
});

export default theme;
