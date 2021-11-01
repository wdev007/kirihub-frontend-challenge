import { ColorModeScript } from "@chakra-ui/color-mode";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
