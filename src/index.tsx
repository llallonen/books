import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./service/routes";
import { setupStore } from "./store/store";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
);
