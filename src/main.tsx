import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme.ts';

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
  <ChakraProvider theme={theme}>
  <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
    </ChakraProvider>
  </Provider>
);
