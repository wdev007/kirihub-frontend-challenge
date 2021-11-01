import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import AppProvider from "./shared/contexts/app.context";
import Routes from "./shared/routes/index.routing";

import theme from "./shared/themes/default";

import "./shared/styles/global.css";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>
    </ChakraProvider>
  );
};

export default App;
