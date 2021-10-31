import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./shared/styles/global.css";

import AppProvider from "./shared/contexts/app.context";
import Routes from "./shared/routes/index.routing";

const App = () => {
  return (
    <ChakraProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>
  );
};

export default App;
