import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import { router } from "./services/router.tsx";
import { setupStore } from "./store/store.ts";
import theme from "./theme.ts";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
);
